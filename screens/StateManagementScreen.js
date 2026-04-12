import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

const StateManagementScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const globalCount = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="State Management in React Native" />
      <BodyText style={{ color: "#f0f0f0" }}>
        React Native supports both local and global state management. Local
        state is managed within individual components using hooks like{" "}
        <BoldAccent>useState</BoldAccent>, while global state is managed
        across components, commonly using libraries like Redux.
      </BodyText>

      <SubHeader>Local State Management (useState):</SubHeader>
      <CodeBlock>{`
const [count, setCount] = useState(0);

const incrementCount = () => {
  setCount(count + 1);
};

const decrementCount = () => {
  setCount(count - 1);
};`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>useState</BoldAccent> hook allows components to
        have their own local state.
      </BodyText>
      <Text style={{ fontSize: 20, color: "#fff", marginVertical: 10 }}>
        Local Count: {count}
      </Text>
      <Button
        title="Increment"
        color="#61dafb"
        onPress={() => setCount(count + 1)}
      />
      <Button
        title="Decrement"
        color="#61dafb"
        onPress={() => setCount(count - 1)}
      />

      <SubHeader>Global State Management (Redux):</SubHeader>
      <CodeBlock>{`
// Redux state is accessed using useSelector and updated using dispatch

const globalCount = useSelector((state) => state.counter);
const dispatch = useDispatch();

const incrementGlobalCount = () => dispatch(increment());
const decrementGlobalCount = () => dispatch(decrement());`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        Using Redux, we can manage global state across components. Here, we use{" "}
        <BoldAccent>useSelector</BoldAccent> to access state and{" "}
        <BoldAccent>dispatch</BoldAccent> to update it.
      </BodyText>
      <Text style={{ fontSize: 20, color: "#fff", marginVertical: 10 }}>
        Global Count: {globalCount}
      </Text>
      <Button
        title="Increment Global Count"
        color="#61dafb"
        onPress={() => dispatch(increment())}
      />
      <Button
        title="Decrement Global Count"
        color="#61dafb"
        onPress={() => dispatch(decrement())}
      />
    </ScreenContainer>
  );
};

export default StateManagementScreen;
