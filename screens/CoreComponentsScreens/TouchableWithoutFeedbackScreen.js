import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const TouchableWithoutFeedbackScreen = () => {
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="TouchableWithoutFeedback Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
        The <BoldAccent>TouchableWithoutFeedback</BoldAccent> component
        is used to dismiss the keyboard when tapping outside of input fields.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Text>Tap here to dismiss the keyboard</Text>
    </View>
  </TouchableWithoutFeedback>
);`}</CodeBlock>

      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.box}>
          <Text style={{ fontSize: 16, color: "#b4b4b4" }}>Tap here to dismiss the keyboard</Text>
        </View>
      </TouchableWithoutFeedback>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  box: { backgroundColor: "#61dafb", padding: 15, borderRadius: 5 },
});

export default TouchableWithoutFeedbackScreen;
