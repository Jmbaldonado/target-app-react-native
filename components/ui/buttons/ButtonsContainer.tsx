import React from "react";
import { StyleSheet, View } from "react-native";

interface ButtonsContainerProps {
  children: React.ReactNode;
}

const ButtonsContainer: React.FC<ButtonsContainerProps> = ({ children }) => {
  return <View style={styles.buttonsContainer}>{children}</View>;
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
});
