import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function CodeBlock({ children, style }) {
  return (
    <View style={[styles.exampleBox, style]}>
      <Text style={styles.code}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exampleBox: {
    width: "100%",
    backgroundColor: "#333840",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  code: {
    color: "rgb(246,247,249)",
    fontSize: 14,
    fontFamily: "monospace",
  },
});
