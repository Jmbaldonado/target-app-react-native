import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../contants/colors";

interface NumberContainerProps {
  children: React.ReactNode;
}
const NumberContainer: React.FC<NumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary,
    fontFamily: "poppins-bold",
    fontSize: 36,
  },
});
