import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";

const RefreshControlScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulating a network request or async operation
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // 2 seconds for demo purpose
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.header}>RefreshControl Component</Text>

      {/* Basic Information */}
      <Text style={styles.body}>
        The <Text style={styles.bold}>RefreshControl</Text> component is used to
        implement pull-to-refresh functionality in a scrollable view (e.g., a
        list).
      </Text>

      {/* Syntax Example */}
      <Text style={styles.subHeader}>Syntax Example:</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.code}>{`
import { RefreshControl, ScrollView } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);  // Simulate data loading
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text>Content to Refresh</Text>
    </ScrollView>
  );
};
        `}</Text>
      </View>
      <Text style={styles.body}>
        In the example above, a <Text style={styles.bold}>RefreshControl</Text>{" "}
        is attached to a <Text style={styles.bold}>ScrollView</Text> to allow
        pull-to-refresh functionality.
      </Text>

      {/* RefreshControl Demo */}
      <Text style={styles.subHeader}>Pull to Refresh Demo</Text>
      <Text style={styles.body}>
        Pull down to trigger the refresh action. The screen will simulate data
        refreshing.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#282c34",
  },
  header: {
    fontSize: 28,
    color: "#61dafb",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeader: { fontSize: 20, color: "#61dafb", marginVertical: 15 },
  body: {
    fontSize: 16,
    color: "#f0f0f0",
    marginBottom: 20,
    textAlign: "center",
  },
  exampleBox: {
    width: "100%",
    backgroundColor: "#333840",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  code: { color: "#f0f0f0", fontSize: 14, fontFamily: "monospace" },
  bold: { fontWeight: "bold", color: "#61dafb" },
});

export default RefreshControlScreen;
