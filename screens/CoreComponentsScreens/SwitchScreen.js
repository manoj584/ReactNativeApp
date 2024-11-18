import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Switch Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>Switch</Text> component is used to create
        a toggle button that can either be on or off. It's commonly used to
        allow users to enable or disable a setting.
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { Switch } from 'react-native';

const [isEnabled, setIsEnabled] = useState(false);

return (
  <Switch
    value={isEnabled}
    onValueChange={(value) => setIsEnabled(value)}
  />
);
        `}</Text>
      </View>

      {/* Using the Switch */}
      <Text style={styles.subHeader}>Switch Example:</Text>
      <Text style={styles.body}>
        Below is an example of using the Switch component. The state of the
        switch (on or off) is controlled by the{" "}
        <Text style={styles.bold}>isEnabled</Text> state variable.
      </Text>

      {/* Switch Component */}
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
      />
      <Text style={styles.body}>The switch is {isEnabled ? "ON" : "OFF"}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#282c34",
  },
  header: {
    fontSize: 28,
    color: "#61dafb",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeader: { fontSize: 20, color: "#61dafb", marginVertical: 15 },
  body: {
    fontSize: 16,
    color: "#f0f0f0",
    marginBottom: 20,
    textAlign: "center",
  },
  exampleBox: {
    width: "100%",
    backgroundColor: "#333840",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  code: { color: "#f0f0f0", fontSize: 14, fontFamily: "monospace" },
  bold: { fontWeight: "bold", color: "#61dafb" },
});

export default SwitchScreen;
