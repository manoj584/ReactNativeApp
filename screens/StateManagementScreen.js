import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

const StateManagementScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const globalCount = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>State Management in React Native</Text>
      <Text style={styles.intro}>
        React Native supports both local and global state management. Local
        state is managed within individual components using hooks like{" "}
        <Text style={styles.bold}>useState</Text>, while global state is managed
        across components, commonly using libraries like Redux.
      </Text>

      <Text style={styles.subHeader}>Local State Management (useState):</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
const [count, setCount] = useState(0);

const incrementCount = () => {
  setCount(count + 1);
};

const decrementCount = () => {
  setCount(count - 1);
};
        `}</Text>
      </View>
      <Text style={styles.body}>
        The <Text style={styles.bold}>useState</Text> hook allows components to
        have their own local state.
      </Text>
      <Text style={styles.countText}>Local Count: {count}</Text>
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

      {/* Redux Example */}
      <Text style={styles.subHeader}>Global State Management (Redux):</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
// Redux state is accessed using useSelector and updated using dispatch

const globalCount = useSelector((state) => state.counter);
const dispatch = useDispatch();

const incrementGlobalCount = () => dispatch(increment());
const decrementGlobalCount = () => dispatch(decrement());
        `}</Text>
      </View>
      <Text style={styles.body}>
        Using Redux, we can manage global state across components. Here, we use{" "}
        <Text style={styles.bold}>useSelector</Text> to access state and{" "}
        <Text style={styles.bold}>dispatch</Text> to update it.
      </Text>
      <Text style={styles.countText}>Global Count: {globalCount}</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
    padding: 20,
  },
  header: {
    fontSize: 28,
    color: "#61dafb",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  intro: {
    fontSize: 16,
    color: "#f0f0f0",
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
    color: "#f0f0f0",
    fontSize: 14,
    fontFamily: "monospace",
  },
  bold: {
    fontWeight: "bold",
    color: "#61dafb",
  },
  countText: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 10,
  },
  body: {
    fontSize: 16,
    color: "#f0f0f0",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default StateManagementScreen;
