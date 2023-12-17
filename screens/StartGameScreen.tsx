import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../contants/colors";
import ButtonsContainer from "../components/ui/buttons/ButtonsContainer";
import ButtonContainer from "../components/ui/buttons/ButtonContainer";

interface StartGameScreenProps {
  onPickedNumber: (pickedNumber: string) => void;
}
const StartGameScreen: React.FC<StartGameScreenProps> = ({
  onPickedNumber,
}) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    onPickedNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <ButtonsContainer>
          <ButtonContainer>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </ButtonContainer>
          <ButtonContainer>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </ButtonContainer>
        </ButtonsContainer>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: 2,
    color: Colors.tertiary,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    width: 50,
  },
});
