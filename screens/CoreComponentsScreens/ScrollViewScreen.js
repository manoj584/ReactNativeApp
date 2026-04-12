import React from "react";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const ScrollViewScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="ScrollView Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>ScrollView</BoldAccent> component is used to
        create scrollable containers in a React Native app. It can handle
        content that overflows the screen size.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { ScrollView, Text } from 'react-native';

return (
  <ScrollView>
    <Text>Content 1</Text>
    <Text>Content 2</Text>
    <Text>Content 3</Text>
    ...
  </ScrollView>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above, the <BoldAccent>ScrollView</BoldAccent>{" "}
        wraps multiple child components, allowing them to be scrolled
        vertically.
      </BodyText>

      <SubHeader>Styled ScrollView Example:</SubHeader>
      <CodeBlock>{`
import { ScrollView, Text } from 'react-native';

return (
  <ScrollView style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
    <Text style={{ fontSize: 16, marginBottom: 10 }}>Item 1</Text>
    <Text style={{ fontSize: 16, marginBottom: 10 }}>Item 2</Text>
    <Text style={{ fontSize: 16, marginBottom: 10 }}>Item 3</Text>
    ...
  </ScrollView>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In this example, a styled <BoldAccent>ScrollView</BoldAccent>{" "}
        with padding and background color is used to create a visually appealing
        scrollable container.
      </BodyText>
    </ScreenContainer>
  );
};

export default ScrollViewScreen;
