import { View, Text, StyleSheet } from "react-native";
import React from "react";

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
    fontSize: 24,
    fontWeight: "bold",
    color: "#163020",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#163020",
    borderRadius: 8,
    padding: 12,
  },
});
