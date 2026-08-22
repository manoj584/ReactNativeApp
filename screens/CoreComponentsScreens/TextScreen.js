import React from "react";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const TextScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Text Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
        The <BoldAccent>Text</BoldAccent> component is used to display
        text in a React Native app. It can be styled with various text
        properties.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { Text } from 'react-native';

return (
  <Text style={styles.text}>Hello, World!</Text>
);`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In the example above, a simple <BoldAccent>Text</BoldAccent>
        component is rendered.
      </BodyText>

      <SubHeader>Styled Text Example:</SubHeader>
      <CodeBlock>{`
import { Text } from 'react-native';

return (
  <Text style={{ fontSize: 20, color: 'blue' }}>Styled Text</Text>
);`}</CodeBlock>
    </ScreenContainer>
  );
};

export default TextScreen;
