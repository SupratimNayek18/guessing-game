import { ImageBackground, StyleSheet, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);
  const [roundsLog, setRoundsLog] = useState([]);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let switchGameOverScreen = () => {
    setIsGameOver(true);
  };

  let startNewGame = () => {
    setUserNumber();
    setIsGameOver(false);
    setRounds(0);
  };

  return (
    <LinearGradient colors={["yellow", "purple"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {isGameOver ? (
          <GameOverScreen
            number={userNumber}
            rounds={rounds}
            startNewGame={startNewGame}
            roundsLog={roundsLog}
          />
        ) : userNumber ? (
          <GameScreen
            userNumber={userNumber}
            setRounds={setRounds}
            setRoundsLog={setRoundsLog}
            switchGameOverScreen={switchGameOverScreen}
          />
        ) : (
          <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
