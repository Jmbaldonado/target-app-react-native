import { View, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../contants/colors";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 16,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
