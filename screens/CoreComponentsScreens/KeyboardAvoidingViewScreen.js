import React from "react";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const KeyboardAvoidingViewScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="KeyboardAvoidingView Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>KeyboardAvoidingView</BoldAccent> component is
        used to automatically adjust the position of UI elements when the
        keyboard is displayed. This ensures that inputs or buttons are not
        hidden by the keyboard.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { KeyboardAvoidingView, TextInput, Button, StyleSheet } from 'react-native';

return (
  <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
  >
    <TextInput style={styles.input} placeholder="Type here" />
    <Button title="Submit" onPress={() => {}} />
  </KeyboardAvoidingView>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above,{" "}
        <BoldAccent>KeyboardAvoidingView</BoldAccent> is used with the{" "}
        <BoldAccent>behavior</BoldAccent> property set to{" "}
        <BoldAccent>padding</BoldAccent>. This ensures that the
        components adjust appropriately when the keyboard appears.
      </BodyText>

      <SubHeader>Advanced Usage:</SubHeader>
      <CodeBlock>{`
import { KeyboardAvoidingView, TextInput, Button, Platform, StyleSheet } from 'react-native';

return (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={60}
  >
    <TextInput style={styles.input} placeholder="Enter text" />
    <Button title="Send" onPress={() => {}} />
  </KeyboardAvoidingView>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the advanced example, the <BoldAccent>behavior</BoldAccent>{" "}
        dynamically changes based on the platform, and the{" "}
        <BoldAccent>keyboardVerticalOffset</BoldAccent> is used to
        adjust the vertical offset for better positioning.
      </BodyText>
    </ScreenContainer>
  );
};

export default KeyboardAvoidingViewScreen;
