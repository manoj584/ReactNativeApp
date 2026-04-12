import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const TouchableHighlightScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="TouchableHighlight Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>TouchableHighlight</BoldAccent> component is
        used to create a button-like element with a highlight effect when
        pressed.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { TouchableHighlight } from 'react-native';

return (
  <TouchableHighlight
    onPress={() => alert('Button Pressed')}
    underlayColor="#DDDDDD"
  >
    <Text style={{ padding: 10 }}>Press Me</Text>
  </TouchableHighlight>
);`}</CodeBlock>

      <TouchableHighlight
        onPress={() => alert("Button Pressed")}
        underlayColor="#DDDDDD"
        style={styles.button}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableHighlight>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  button: { backgroundColor: "#61dafb", padding: 15, borderRadius: 5 },
  buttonText: { color: "#fff", fontSize: 16 },
});

export default TouchableHighlightScreen;
