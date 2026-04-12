import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function NumberBadge({ number, size = 32 }) {
  return (
    <View style={[styles.badge, { width: size, height: size, borderRadius: size / 2 }]}>
      <Text style={styles.badgeText}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "rgba(97, 218, 251, 0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    flexShrink: 0,
  },
  badgeText: {
    fontSize: 14,
    color: "#61dafb",
    fontWeight: "700",
  },
});
