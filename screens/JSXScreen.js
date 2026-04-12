import React from "react";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const JSXScreen = ({ navigation }) => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="JSX in React Native" />

      <BodyText>
        JSX is a syntax extension for JavaScript. It allows you to write
        HTML-like structures within JavaScript code, which React Native converts
        into JavaScript function calls.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
const element = <Text>Hello, JSX!</Text>;
      `}</CodeBlock>
      <BodyText>
        In this example,{" "}
        <BoldAccent>{"<Text>Hello, JSX!</Text>"}</BoldAccent> is a JSX
        element that renders text to the screen. JSX tags can be nested, styled,
        and include JavaScript expressions.
      </BodyText>

      <SubHeader>JSX Practical Example:</SubHeader>
      <CodeBlock>{`
const MyComponent = () => {
  const name = "React Native";
  return (
    <View>
      <Text style={{ color: "blue" }}>Welcome to {name}!</Text>
    </View>
  );
};
      `}</CodeBlock>
      <BodyText>
        Here, we use <BoldAccent>{"{name}"}</BoldAccent> to dynamically
        insert JavaScript variables in JSX. The text "Welcome to React Native!"
        would render in blue because of the inline style.
      </BodyText>
    </ScreenContainer>
  );
};

export default JSXScreen;
