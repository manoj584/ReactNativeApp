import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function Card({ children, style, gradientColors = ["#61dafb", "#38bdf8"] }) {
  return (
    <View style={[styles.card, style]}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientLine}
      />
      {children}
    </View>
  );
}

export function CardPressable({
  children,
  onPress,
  style,
  activeOpacity = 0.82,
  gradientColors = ["#61dafb", "#38bdf8"],
  level,
}) {
  const getLevelColor = (lvl) => {
    switch (lvl?.toLowerCase()) {
      case "beginner":
        return { bg: "rgba(39, 201, 63, 0.15)", text: "#27c93f" };
      case "intermediate":
        return { bg: "rgba(97, 218, 251, 0.15)", text: "#61dafb" };
      case "advanced":
        return { bg: "rgba(198, 120, 221, 0.15)", text: "#c678dd" };
      case "practice":
        return { bg: "rgba(255, 189, 46, 0.15)", text: "#ffbd2e" };
      default:
        return null;
    }
  };

  const levelStyle = getLevelColor(level);

  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientLine}
      />
      {levelStyle && (
        <View style={[styles.levelBadge, { backgroundColor: levelStyle.bg }]}>
          <Text style={[styles.levelBadgeText, { color: levelStyle.text }]}>
            {level}
          </Text>
        </View>
      )}
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
    backgroundColor: "#282c34",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#373b47",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    position: "relative",
  },
  gradientLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3.5,
  },
  levelBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
  },
  levelBadgeText: {
    fontSize: 9,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  cardTitle: {
    color: "#61dafb",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardSubtitle: {
    color: "#b4b4b4",
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
  },
});

