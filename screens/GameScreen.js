import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Instructions from "../components/ui/Instructions";
import ButtonsContainer from "../components/ui/ButtonsContainer";
import ButtonContainer from "../components/ui/ButtonContainer";
import { Ionicons } from "@expo/vector-icons";

let generateRandomNumber = (min, max, excludeNumber) => {
  let random = Math.floor(Math.random() * (max - min)) + min;
  if (random === excludeNumber) {
    return generateRandomNumber(min, max, excludeNumber);
  }
  return random;
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  userNumber,
  setRounds,
  setRoundsLog,
  switchGameOverScreen,
}) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      switchGameOverScreen();
    }
  }, [currentGuess, userNumber, switchGameOverScreen]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
    setRoundsLog([initialGuess]);
  }, []);

  let nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("No cheating!", "Don't try to fool me", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandNumber);
    setRounds((rounds) => rounds + 1);
    setRoundsLog((roundsLog) => [...roundsLog, newRandNumber]);
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instructions style={styles.instructionText}>
          Higher or Lower?
        </Instructions>
        <ButtonsContainer>
          <ButtonContainer>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={22} color="black" />
            </PrimaryButton>
          </ButtonContainer>
          <ButtonContainer>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={22} color="black" />
            </PrimaryButton>
          </ButtonContainer>
        </ButtonsContainer>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerWide}>
          <ButtonContainer>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={22} color="black" />
            </PrimaryButton>
          </ButtonContainer>
          <NumberContainer>{currentGuess}</NumberContainer>
          <ButtonContainer>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={22} color="black" />
            </PrimaryButton>
          </ButtonContainer>
        </View>
      </>
    );
  }

  return (
    <View style={[styles.screen, { padding: width > 500 ? 70 : 30 }]}>
      <Title>Opponent's Guess</Title>
      {content}
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // padding: width>500?50:30,
    marginTop: 20,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 20,
  },
  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
