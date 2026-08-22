import React from "react";
import { StatusBar } from "react-native";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const StatusBarScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="StatusBar Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
        The <BoldAccent>StatusBar</BoldAccent> component is used to
        control the app's status bar (the area at the top of the screen that
        shows time, battery, etc.). It allows you to change properties like
        visibility, style, and color of the status bar.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { StatusBar } from 'react-native';

return (
  <View>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
    <Text>Content Below StatusBar</Text>
  </View>
);`}</CodeBlock>

      <SubHeader>Custom StatusBar Example:</SubHeader>
      <BodyText style={{ color: "#b4b4b4" }}>
        In this example, we customize the status bar with a dark background and
        light text.
      </BodyText>

      <StatusBar barStyle="light-content" backgroundColor="#333" />
    </ScreenContainer>
  );
};

export default StatusBarScreen;
