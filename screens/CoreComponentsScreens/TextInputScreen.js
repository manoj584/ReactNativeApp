import React from "react";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const TextInputScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="TextInput Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
        The <BoldAccent>TextInput</BoldAccent> component is used to
        capture user input in a text field. It supports features like
        placeholders, styles, and event handling.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { TextInput } from 'react-native';

return (
  <TextInput
    placeholder="Type here"
    style={styles.input}
  />
);`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In the example above, a simple{" "}
        <BoldAccent>TextInput</BoldAccent> field with a placeholder is
        created.
      </BodyText>

      <SubHeader>Styled TextInput Example:</SubHeader>
      <CodeBlock>{`
import { TextInput } from 'react-native';

return (
  <TextInput
    placeholder="Enter your name"
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      borderRadius: 5
    }}
  />
);`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In this example, a styled <BoldAccent>TextInput</BoldAccent> is
        created with padding, border, and rounded corners.
      </BodyText>
    </ScreenContainer>
  );
};

export default TextInputScreen;
