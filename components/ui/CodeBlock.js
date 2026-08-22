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
    backgroundColor: "#1a1d23",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#373b47",
  },
  code: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "monospace",
  },
});
