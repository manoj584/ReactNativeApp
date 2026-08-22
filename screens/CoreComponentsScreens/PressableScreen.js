import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const PressableScreen = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Pressable Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
        The <BoldAccent>Pressable</BoldAccent> component is used to
        create a clickable element that responds to touch interactions. It
        replaces the <BoldAccent>TouchableOpacity</BoldAccent>,{" "}
        <BoldAccent>TouchableHighlight</BoldAccent>, and{" "}
        <BoldAccent>TouchableWithoutFeedback</BoldAccent> components in
        newer React Native versions.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { Pressable, Text } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable onPress={() => setPressed(!pressed)}>
      <Text>{pressed ? 'Pressed!' : 'Press Me!'}</Text>
    </Pressable>
  );
};`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In the example above, a simple{" "}
        <BoldAccent>Pressable</BoldAccent> component is used. When the
        user presses it, the state changes, and the text toggles between "Press
        Me!" and "Pressed!".
      </BodyText>

      <SubHeader>Demo:</SubHeader>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#61dafb" : "#333840" },
        ]}
        onPress={() => setPressed(!pressed)}
      >
        <Text style={styles.buttonText}>
          {pressed ? "Pressed!" : "Press Me!"}
        </Text>
      </Pressable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  button: { padding: 15, borderRadius: 5, alignItems: "center" },
  buttonText: { color: "#ffffff", fontSize: 18, fontWeight: "bold" },
});

export default PressableScreen;
