import React from "react";
import { View, ScrollView, Text } from "react-native";

export function ScreenContainer({ children, style }) {
  return (
    <ScrollView
      contentContainerStyle={[
        { flexGrow: 1, backgroundColor: "#282c34", padding: 20, paddingBottom: 30 },
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
    <View style={{ paddingTop: 4, paddingBottom: 15, alignItems: "center" }}>
      <Text
        style={{
          fontSize: 28,
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
            fontSize: 16,
            color: "#a0a0a0",
            textAlign: "center",
            marginTop: 8,
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
        { fontSize: 16, color: "rgb(180,180,180)", marginBottom: 20, textAlign: "center" },
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
