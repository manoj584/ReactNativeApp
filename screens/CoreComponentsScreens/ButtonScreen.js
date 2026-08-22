import React from "react";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const ButtonScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Button Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
        The <BoldAccent>Button</BoldAccent> component is used to create
        clickable buttons in a React Native app. It has properties like `title`,
        `onPress`, and `color` to customize its behavior and style.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { Button } from 'react-native';

return (
  <Button
    title="Click Me"
    onPress={() => alert('Button Pressed')}
  />
);`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In the example above, a simple <BoldAccent>Button</BoldAccent>{" "}
        is created that shows an alert when pressed.
      </BodyText>

      <SubHeader>Custom Button Example:</SubHeader>
      <CodeBlock>{`
import { Button } from 'react-native';

return (
  <Button
    title="Submit"
    color="blue"
    onPress={() => console.log('Submitted')}
  />
);`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In this example, the <BoldAccent>Button</BoldAccent> is styled
        with a custom color and logs a message to the console when pressed.
      </BodyText>
    </ScreenContainer>
  );
};

export default ButtonScreen;
