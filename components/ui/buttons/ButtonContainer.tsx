import React from "react";
import { StyleSheet, View } from "react-native";

interface ButtonContainerProps {
  children: React.ReactNode;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ children }) => {
  return <View style={styles.buttonContainer}>{children}</View>;
};

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
});
