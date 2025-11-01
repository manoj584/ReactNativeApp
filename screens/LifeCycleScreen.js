import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

const LifeCycleScreen = () => {
  // State to track the counter
  const [count, setCount] = useState(0);

  // ComponentDidMount: useEffect with empty dependency array runs only once when component mounts
  useEffect(() => {
    console.log("Component Mounted");
    // Simulating componentDidMount logic

    // Cleanup function - simulates componentWillUnmount
    return () => {
      console.log("Component Unmounted");
      // Simulating componentWillUnmount logic
    };
  }, []); // Empty array means this effect runs only once (similar to componentDidMount)

  // ComponentDidUpdate: useEffect with count as a dependency will run every time count changes
  useEffect(() => {
    if (count !== 0) {
      console.log(`Component updated. Current count: ${count}`);
    } else {
      console.log(`Component updated. Current count: ${0}`);
    }
  }, [count]); // Runs whenever count changes (similar to componentDidUpdate)

  // Increment and decrement functions to update the count state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>React Native Life Cycle Methods</Text>
      <Text style={styles.body}>
        In React, components go through a series of stages in their lifetime.
        These stages are known as lifecycle methods. In functional components,
        we can use the <Text style={styles.bold}>useEffect</Text> hook to handle
        these stages.
      </Text>
      {/* ComponentDidMount - This runs only once after the component is mounted */}
      <Text style={styles.subHeader}>ComponentDidMount:</Text>
      <Text style={styles.body}>
        The <Text style={styles.bold}>useEffect</Text> hook with an empty
        dependency array simulates{" "}
        <Text style={styles.bold}>componentDidMount</Text>. It runs once when
        the component is first rendered.
      </Text>
      {/* Syntax Example for componentDidMount */}
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
useEffect(() => {
  console.log("Component Mounted");

  return () => {
    console.log("Component Unmounted");
  };
}, []);
        `}</Text>
      </View>
      {/* Practical Example for componentDidMount */}
      <Text style={styles.subHeader}>Practical Example:</Text>
      <Text style={styles.body}>
        In this example, we can observe that{" "}
        <Text style={styles.bold}>componentDidMount</Text> runs when the
        component is first displayed. Additionally, the cleanup function
        simulates <Text style={styles.bold}>componentWillUnmount</Text>, which
        runs when the component is removed from the UI.
      </Text>
      {/* ComponentDidUpdate - This runs every time the count state changes */}
      <Text style={styles.subHeader}>ComponentDidUpdate:</Text>
      <Text style={styles.body}>
        The <Text style={styles.bold}>useEffect</Text> hook with a dependency
        array containing <Text style={styles.bold}>count</Text> simulates{" "}
        <Text style={styles.bold}>componentDidUpdate</Text>. It runs every time{" "}
        <Text style={styles.bold}>count</Text> changes.
      </Text>
      {/* Syntax Example for componentDidUpdate */}
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
useEffect(() => {
  console.log("Component updated");
}, [count]);
        `}</Text>
      </View>
      {/* Practical Example for componentDidUpdate */}
      <Text style={styles.subHeader}>Practical Example:</Text>
      <Text style={styles.body}>
        Here, every time the counter updates (i.e., the user clicks "Increment"
        or "Decrement"), the <Text style={styles.bold}>componentDidUpdate</Text>{" "}
        logic will run. This is useful for reacting to state changes.
      </Text>
      {/* ComponentWillUnmount - This runs before the component unmounts */}
      <Text style={styles.subHeader}>ComponentWillUnmount:</Text>
      <Text style={styles.body}>
        The <Text style={styles.bold}>return</Text> statement inside{" "}
        <Text style={styles.bold}>useEffect</Text> simulates{" "}
        <Text style={styles.bold}>componentWillUnmount</Text>. It runs when the
        component is about to unmount.
      </Text>
      {/* Syntax Example for componentWillUnmount */}
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
useEffect(() => {
  return () => {
    console.log("Component Unmounted");
  };
}, []);
        `}</Text>
      </View>
      {/* Practical Example for componentWillUnmount */}
      <Text style={styles.subHeader}>Practical Example:</Text>
      <Text style={styles.body}>
        The cleanup function inside the{" "}
        <Text style={styles.bold}>useEffect</Text> hook simulates the{" "}
        <Text style={styles.bold}>componentWillUnmount</Text> lifecycle method.
        It will run when the component is removed from the view.
      </Text>
      {/* Counter Controls */}
      <View style={styles.counterContainer}>
        <Button color="#61dafb" title="Increment" onPress={increment} />
        <Text style={styles.countText}>Count: {count}</Text>
        <Button color="#61dafb" title="Decrement" onPress={decrement} />
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
  text: {
    fontSize: 24,
    color: "rgb(246,247,249)",
    marginBottom: 20,
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
  bold: {
    fontWeight: "bold",
    color: "#61dafb",
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

export default LifeCycleScreen;
