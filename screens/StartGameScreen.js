import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Instructions from "../components/ui/Instructions";
import ButtonsContainer from "../components/ui/ButtonsContainer";
import ButtonContainer from "../components/ui/ButtonContainer";

export default function StartGameScreen({ pickedNumberHandler }) {
  const [inputNumber, changeInputNumber] = useState("");
  const { width, height } = useWindowDimensions();

  let inputHandler = (input) => {
    changeInputNumber(input);
  };

  let resetInput = () => {
    changeInputNumber("");
  };

  let confirmInputHandler = () => {
    let parsedNumber = parseInt(inputNumber);
    if (isNaN(parsedNumber) || parsedNumber < 0 || parsedNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 0 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInput }]
      );
      return;
    }
    pickedNumberHandler(parsedNumber);
  };

  const marginTopDistance = height < 500 ? 30 : 100;
  const marginHorizontal = height < 500 ? 100 : 30;

  return (
    <View
      style={[
        styles.rootContainer,
        { marginTop: marginTopDistance, marginHorizontal: marginHorizontal },
      ]}
    >
      <Title>Guess My Number</Title>
      <Card>
        <Instructions>Enter a number</Instructions>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={inputNumber}
          onChangeText={inputHandler}
        />
        <ButtonsContainer>
          <ButtonContainer>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </ButtonContainer>
          <ButtonContainer>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </ButtonContainer>
        </ButtonsContainer>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    // marginHorizontal: 30,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontFamily: "open-sans-bold",
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    color: "yellow",
    marginVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
