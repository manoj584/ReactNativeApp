import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function CardPressable({ children, onPress, style, activeOpacity = 0.7 }) {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      {children}
    </TouchableOpacity>
  );
}

export function CardTitle({ children, style }) {
  return <Text style={[styles.cardTitle, style]}>{children}</Text>;
}

export function CardSubtitle({ children, style }) {
  return <Text style={[styles.cardSubtitle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#3a3f47",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#4a5057",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: {
    color: "#61dafb",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardSubtitle: {
    color: "#a0a0a0",
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
  },
});
