import React from "react";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const PropsScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Understanding Props in React Native" />

      <BodyText>
        Props (short for "properties") allow components to communicate with each
        other by passing data from a parent component to a child component. This
        is one of the core concepts in React and React Native.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
const Greeting = ({ name }) => {
  return <Text>Hello, {name}!</Text>;
};

<Greeting name="John" />;
      `}</CodeBlock>
      <BodyText>
        In this example,{" "}
        <BoldAccent>{"<Greeting name='John' />"}</BoldAccent> is a
        component that receives the <BoldAccent>name</BoldAccent> prop
        and displays it inside a <BoldAccent>{"<Text>"}</BoldAccent>{" "}
        component.
      </BodyText>

      <SubHeader>Practical Example:</SubHeader>
      <CodeBlock>{`
const WelcomeMessage = ({ name, age }) => {
  return (
    <View>
      <Text>Welcome, {name}!</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};

<WelcomeMessage name="Alice" age={25} />;
      `}</CodeBlock>
      <BodyText>
        Here, the <BoldAccent>{"<WelcomeMessage>"}</BoldAccent>{" "}
        component takes two props: <BoldAccent>name</BoldAccent> and{" "}
        <BoldAccent>age</BoldAccent>. The component renders them as text
        on the screen. You can pass dynamic data to props from the parent
        component.
      </BodyText>

      <SubHeader>Nested Components with Props:</SubHeader>
      <CodeBlock>{`
const ParentComponent = () => {
  const message = "Hello from the parent!";
  return <ChildComponent message={message} />;
};

const ChildComponent = ({ message }) => {
  return <Text>{message}</Text>;
};

<ParentComponent />;
      `}</CodeBlock>
      <BodyText>
        In this example, <BoldAccent>{"ParentComponent"}</BoldAccent>{" "}
        passes a prop <BoldAccent>message</BoldAccent> to the{" "}
        <BoldAccent>ChildComponent</BoldAccent>. The child then renders
        the value of the message prop.
      </BodyText>
    </ScreenContainer>
  );
};

export default PropsScreen;
