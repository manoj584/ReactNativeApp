import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const LifeCycleScreen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    if (count !== 0) {
      console.log(`Component updated. Current count: ${count}`);
    } else {
      console.log(`Component updated. Current count: ${0}`);
    }
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="React Native Life Cycle Methods" />
      <BodyText>
        In React, components go through a series of stages in their lifetime.
        These stages are known as lifecycle methods. In functional components,
        we can use the <BoldAccent>useEffect</BoldAccent> hook to handle
        these stages.
      </BodyText>

      <SubHeader>ComponentDidMount:</SubHeader>
      <BodyText>
        The <BoldAccent>useEffect</BoldAccent> hook with an empty
        dependency array simulates{" "}
        <BoldAccent>componentDidMount</BoldAccent>. It runs once when
        the component is first rendered.
      </BodyText>
      <CodeBlock>{`
useEffect(() => {
  console.log("Component Mounted");

  return () => {
    console.log("Component Unmounted");
  };
}, []);`}</CodeBlock>

      <SubHeader>Practical Example:</SubHeader>
      <BodyText>
        In this example, we can observe that{" "}
        <BoldAccent>componentDidMount</BoldAccent> runs when the
        component is first displayed. Additionally, the cleanup function
        simulates <BoldAccent>componentWillUnmount</BoldAccent>, which
        runs when the component is removed from the UI.
      </BodyText>

      <SubHeader>ComponentDidUpdate:</SubHeader>
      <BodyText>
        The <BoldAccent>useEffect</BoldAccent> hook with a dependency
        array containing <BoldAccent>count</BoldAccent> simulates{" "}
        <BoldAccent>componentDidUpdate</BoldAccent>. It runs every time{" "}
        <BoldAccent>count</BoldAccent> changes.
      </BodyText>
      <CodeBlock>{`
useEffect(() => {
  console.log("Component updated");
}, [count]);`}</CodeBlock>

      <SubHeader>Practical Example:</SubHeader>
      <BodyText>
        Here, every time the counter updates (i.e., the user clicks "Increment"
        or "Decrement"), the <BoldAccent>componentDidUpdate</BoldAccent>{" "}
        logic will run. This is useful for reacting to state changes.
      </BodyText>

      <SubHeader>ComponentWillUnmount:</SubHeader>
      <BodyText>
        The <BoldAccent>return</BoldAccent> statement inside{" "}
        <BoldAccent>useEffect</BoldAccent> simulates{" "}
        <BoldAccent>componentWillUnmount</BoldAccent>. It runs when the
        component is about to unmount.
      </BodyText>
      <CodeBlock>{`
useEffect(() => {
  return () => {
    console.log("Component Unmounted");
  };
}, []);`}</CodeBlock>

      <SubHeader>Practical Example:</SubHeader>
      <BodyText>
        The cleanup function inside the{" "}
        <BoldAccent>useEffect</BoldAccent> hook simulates the{" "}
        <BoldAccent>componentWillUnmount</BoldAccent> lifecycle method.
        It will run when the component is removed from the view.
      </BodyText>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Button color="#61dafb" title="Increment" onPress={increment} />
        <Text style={{ fontSize: 24, color: "#ffffff", marginVertical: 10 }}>
          Count: {count}
        </Text>
        <Button color="#61dafb" title="Decrement" onPress={decrement} />
      </View>
    </ScreenContainer>
  );
};

export default LifeCycleScreen;
