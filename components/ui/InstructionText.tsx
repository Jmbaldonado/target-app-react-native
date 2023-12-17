import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import Colors from "../../contants/colors";

interface InstructionTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}
const InstructionText: React.FC<InstructionTextProps> = ({
  children,
  style,
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.tertiary,
    fontFamily: "poppins",
    fontSize: 24,
  },
});
