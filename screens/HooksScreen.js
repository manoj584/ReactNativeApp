import React, { useState, useEffect, createContext } from "react";
import { View, Text, Button } from "react-native";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

// Custom hook
const useCustomCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  return { count, increment, decrement };
};

// Context and reducer setup
const CountContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const HooksScreen = () => {
  const [count] = useState(0);
  const customCounter = useCustomCounter();

  useEffect(() => {
    console.log("Component Mounted");
    return () => console.log("Component Unmounted");
  }, []);

  useEffect(() => {
    console.log(`Count updated: ${customCounter.count}`);
  }, [customCounter.count]);

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="React Native Hooks" />

      {/* useState Hook */}
      <SubHeader>useState:</SubHeader>
      <CodeBlock>{`// Syntax
const [state, setState] = useState(initialState);

// Example
const [count, setCount] = useState(0);`}</CodeBlock>
      <BodyText>
        <BoldAccent>useState</BoldAccent> adds state to a functional
        component. Here, <BoldAccent>count</BoldAccent> is a state
        variable, and <BoldAccent>setCount</BoldAccent> updates it.
      </BodyText>

      {/* useEffect Hook */}
      <SubHeader>useEffect:</SubHeader>
      <CodeBlock>{`// Syntax
useEffect(() => {
  // effect code
}, [dependencies]);

// Example
useEffect(() => {
  console.log("Component Mounted");
  return () => console.log("Component Unmounted");
}, []);`}</CodeBlock>
      <BodyText>
        <BoldAccent>useEffect</BoldAccent> runs after every render. By
        providing dependencies, it can simulate lifecycle events (mount, update,
        unmount).
      </BodyText>

      {/* useContext Hook */}
      <SubHeader>useContext:</SubHeader>
      <CodeBlock>{`// Syntax
const value = useContext(MyContext);

// Example
const count = useContext(CountContext);`}</CodeBlock>
      <BodyText>
        <BoldAccent>useContext</BoldAccent> allows access to context
        values directly without needing a Consumer component.
      </BodyText>

      {/* useRef Hook */}
      <SubHeader>useRef:</SubHeader>
      <CodeBlock>{`// Syntax
const ref = useRef(initialValue);

// Example
const countRef = useRef(0);
countRef.current += 1;`}</CodeBlock>
      <BodyText>
        <BoldAccent>useRef</BoldAccent> provides a mutable ref object
        that persists across renders, allowing access to a DOM element or
        storing a value without re-rendering.
      </BodyText>

      {/* useReducer Hook */}
      <SubHeader>useReducer:</SubHeader>
      <CodeBlock>{`// Syntax
const [state, dispatch] = useReducer(reducer, initialState);

// Example
const [state, dispatch] = useReducer(reducer, 0);
dispatch({ type: "increment" });`}</CodeBlock>
      <BodyText>
        <BoldAccent>useReducer</BoldAccent> is for complex state logic,
        providing a reducer function and initial state, returning the current
        state and a dispatch function.
      </BodyText>

      {/* useCallback Hook */}
      <SubHeader>useCallback:</SubHeader>
      <CodeBlock>{`// Syntax
const memoizedCallback = useCallback(() => {
  // callback code
}, [dependencies]);

// Example
const memoizedCallback = useCallback(() => {
  alert("Callback triggered!");
}, []);`}</CodeBlock>
      <BodyText>
        <BoldAccent>useCallback</BoldAccent> memoizes a callback
        function, preventing its recreation on every render unless its
        dependencies change.
      </BodyText>

      {/* useMemo Hook */}
      <SubHeader>useMemo:</SubHeader>
      <CodeBlock>{`// Syntax
const memoizedValue = useMemo(() => {
  // calculation code
}, [dependencies]);

// Example
const expensiveCalculation = useMemo(() => {
  return count * 2;
}, [count]);`}</CodeBlock>
      <BodyText>
        <BoldAccent>useMemo</BoldAccent> memoizes the result of a
        computation to optimize performance, recalculating only when
        dependencies change.
      </BodyText>

      {/* Custom Hook Example */}
      <SubHeader>Custom Hook:</SubHeader>
      <CodeBlock>{`// Syntax
const useCustomHook = (initialValue) => {
  // hook logic
  return hookResult;
};

// Example
const useCustomCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};`}</CodeBlock>
      <BodyText>
        Custom hooks allow reuse of stateful logic.{" "}
        <BoldAccent>useCustomCounter</BoldAccent> provides a counter
        with increment and decrement functions.
      </BodyText>

      {/* Demonstration of Custom Hook */}
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Button
          color="#61dafb"
          title="Increment Custom Count"
          onPress={customCounter.increment}
        />
        <Text style={{ fontSize: 24, color: "#ffffff", marginVertical: 10 }}>
          Custom Count: {customCounter.count}
        </Text>
        <Button
          color="#61dafb"
          title="Decrement Custom Count"
          onPress={customCounter.decrement}
        />
      </View>
    </ScreenContainer>
  );
};

export default HooksScreen;
