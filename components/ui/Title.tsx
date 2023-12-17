import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../contants/colors";

interface TitleProps {
  children?: React.ReactNode;
}
const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "poppins-bold",
    fontSize: 24,
    color: Colors.primary,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 8,
    padding: 12,
  },
});
