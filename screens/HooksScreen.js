import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  createContext,
} from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>React Native Hooks</Text>

      {/* useState Hook */}
      <Text style={styles.subHeader}>useState:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`// Syntax
const [state, setState] = useState(initialState);

// Example
const [count, setCount] = useState(0);
        `}</Text>
      </View>
      <Text style={styles.body}>
        <Text style={styles.bold}>useState</Text> adds state to a functional
        component. Here, <Text style={styles.bold}>count</Text> is a state
        variable, and <Text style={styles.bold}>setCount</Text> updates it.
      </Text>

      {/* useEffect Hook */}
      <Text style={styles.subHeader}>useEffect:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`// Syntax
useEffect(() => {
  // effect code
}, [dependencies]);

// Example
useEffect(() => {
  console.log("Component Mounted");
  return () => console.log("Component Unmounted");
}, []);
        `}</Text>
      </View>
      <Text style={styles.body}>
        <Text style={styles.bold}>useEffect</Text> runs after every render. By
        providing dependencies, it can simulate lifecycle events (mount, update,
        unmount).
      </Text>

      {/* useContext Hook */}
      <Text style={styles.subHeader}>useContext:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`// Syntax
const value = useContext(MyContext);

// Example
const count = useContext(CountContext);
          `}</Text>
      </View>
      <Text style={styles.body}>
        <Text style={styles.bold}>useContext</Text> allows access to context
        values directly without needing a Consumer component.
      </Text>

      {/* useRef Hook */}
      <Text style={styles.subHeader}>useRef:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`// Syntax
const ref = useRef(initialValue);

// Example
const countRef = useRef(0);
countRef.current += 1;
        `}</Text>
      </View>
      <Text style={styles.body}>
        <Text style={styles.bold}>useRef</Text> provides a mutable ref object
        that persists across renders, allowing access to a DOM element or
        storing a value without re-rendering.
      </Text>

      {/* useReducer Hook */}
      <Text style={styles.subHeader}>useReducer:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`// Syntax
const [state, dispatch] = useReducer(reducer, initialState);

// Example
const [state, dispatch] = useReducer(reducer, 0);
dispatch({ type: "increment" });
        `}</Text>
      </View>
      <Text style={styles.body}>
        <Text style={styles.bold}>useReducer</Text> is for complex state logic,
        providing a reducer function and initial state, returning the current
        state and a dispatch function.
      </Text>

      {/* useCallback Hook */}
      <Text style={styles.subHeader}>useCallback:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`// Syntax
const memoizedCallback = useCallback(() => {
  // callback code
}, [dependencies]);

// Example
const memoizedCallback = useCallback(() => {
  alert("Callback triggered!");
}, []);
        `}</Text>
      </View>
      <Text style={styles.body}>
        <Text style={styles.bold}>useCallback</Text> memoizes a callback
        function, preventing its recreation on every render unless its
        dependencies change.
      </Text>

      {/* useMemo Hook */}
      <Text style={styles.subHeader}>useMemo:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`// Syntax
const memoizedValue = useMemo(() => {
  // calculation code
}, [dependencies]);

// Example
const expensiveCalculation = useMemo(() => {
  return count * 2;
}, [count]);
        `}</Text>
      </View>
      <Text style={styles.body}>
        <Text style={styles.bold}>useMemo</Text> memoizes the result of a
        computation to optimize performance, recalculating only when
        dependencies change.
      </Text>

      {/* Custom Hook Example */}
      <Text style={styles.subHeader}>Custom Hook:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`// Syntax
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
};
        `}</Text>
      </View>
      <Text style={styles.body}>
        Custom hooks allow reuse of stateful logic.{" "}
        <Text style={styles.bold}>useCustomCounter</Text> provides a counter
        with increment and decrement functions.
      </Text>

      {/* Demonstration of Custom Hook */}
      <View style={styles.counterContainer}>
        <Button
          color="#61dafb"
          title="Increment Custom Count"
          onPress={customCounter.increment}
        />
        <Text style={styles.countText}>
          Custom Count: {customCounter.count}
        </Text>
        <Button
          color="#61dafb"
          title="Decrement Custom Count"
          onPress={customCounter.decrement}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(35,39,47)",
    padding: 20,
  },
  header: {
    fontSize: 28,
    color: "#61dafb",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    color: "rgb(180,180,180)",
    marginBottom: 20,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 20,
    color: "#61dafb",
    marginVertical: 15,
  },
  exampleBox: {
    width: "100%",
    backgroundColor: "#333840",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  code: {
    color: "rgb(246,247,249)",
    fontSize: 14,
    fontFamily: "monospace",
  },
  bold: {
    fontWeight: "bold",
    color: "#61dafb",
  },
  counterContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  countText: {
    fontSize: 24,
    color: "rgb(246,247,249)",
    marginVertical: 10,
  },
});

export default HooksScreen;
