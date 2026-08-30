import React from "react";
import { View, ScrollView, Text } from "react-native";

export function ScreenContainer({ children, style }) {
  return (
    <ScrollView
      contentContainerStyle={[
        { flexGrow: 1, backgroundColor: "#20232a", padding: 20, paddingBottom: 30 },
        style,
      ]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

export function ScreenHeader({ title, subtitle }) {
  return (
    <View style={{ paddingTop: 30, paddingBottom: 25, paddingHorizontal: 20, alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          color: "#61dafb",
          fontWeight: "800",
          textAlign: "center",
          letterSpacing: 0.5,
        }}
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          style={{
            fontSize: 17,
            color: "#b4b4b4",
            textAlign: "center",
            marginTop: 12,
            lineHeight: 24,
          }}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
}

export function SubHeader({ children }) {
  return (
    <Text style={{ fontSize: 20, color: "#61dafb", marginVertical: 15 }}>
      {children}
    </Text>
  );
}

export function BodyText({ children, style }) {
  return (
    <Text
      style={[
        { fontSize: 16, color: "#b4b4b4", marginBottom: 20, textAlign: "center" },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function BoldAccent({ children }) {
  return (
    <Text style={{ fontWeight: "bold", color: "#61dafb" }}>{children}</Text>
  );
}
