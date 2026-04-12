import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const TouchableOpacityScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="TouchableOpacity Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>TouchableOpacity</BoldAccent> component is used
        to create a button-like element with an opacity effect when pressed.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { TouchableOpacity } from 'react-native';

return (
  <TouchableOpacity
    onPress={() => alert('Button Pressed')}
    activeOpacity={0.7}
  >
    <Text style={{ padding: 10 }}>Press Me</Text>
  </TouchableOpacity>
);`}</CodeBlock>

      <TouchableOpacity
        onPress={() => alert("Button Pressed")}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  button: { backgroundColor: "#61dafb", padding: 15, borderRadius: 5 },
  buttonText: { color: "#fff", fontSize: 16 },
});

export default TouchableOpacityScreen;
