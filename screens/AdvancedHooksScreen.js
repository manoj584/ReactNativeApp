import React, { useState, useLayoutEffect, useImperativeHandle, useRef, forwardRef, useId, useTransition, useDeferredValue } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const AdvancedHooksScreen = () => {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const deferredName = useDeferredValue(name);
  const inputRef = useRef(null);
  const generatedId = useId();

  useLayoutEffect(() => {
    console.log("useLayoutEffect runs before paint");
  }, []);

  const handleNameChange = (text) => {
    startTransition(() => {
      setName(text);
    });
  };

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Advanced React Hooks" />

      {/* useLayoutEffect */}
      <SubHeader>useLayoutEffect:</SubHeader>
      <CodeBlock>{`useLayoutEffect(() => {
  // Runs synchronously before DOM paint
  console.log("Layout effect");
}, [dependencies]);`}</CodeBlock>
      <BodyText>
        <BoldAccent>useLayoutEffect</BoldAccent> fires synchronously after all DOM mutations
        but before paint. Use it for DOM measurements and layout calculations.
      </BodyText>

      {/* useImperativeHandle */}
      <SubHeader>useImperativeHandle:</SubHeader>
      <CodeBlock>{`const MyComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    customMethod: () => console.log("Custom method"),
  }));
  return <View />;
});`}</CodeBlock>
      <BodyText>
        <BoldAccent>useImperativeHandle</BoldAccent> customizes the instance value exposed to parent
        components when using ref.
      </BodyText>

      {/* useId */}
      <SubHeader>useId:</SubHeader>
      <CodeBlock>{`const id = useId();
return <View nativeID={id} />;`}</CodeBlock>
      <BodyText>
        <BoldAccent>useId</BoldAccent> generates a unique ID that is stable across server and client,
        useful for accessibility attributes.
      </BodyText>
      <View style={styles.demoContainer}>
        <Text style={styles.demoText}>Generated ID: {generatedId}</Text>
      </View>

      {/* useTransition */}
      <SubHeader>useTransition:</SubHeader>
      <CodeBlock>{`const [isPending, startTransition] = useTransition();

startTransition(() => {
  setState(heavyComputation());
});`}</CodeBlock>
      <BodyText>
        <BoldAccent>useTransition</BoldAccent> marks state updates as non-urgent transitions,
        keeping the UI responsive during heavy computations.
      </BodyText>
      <View style={styles.demoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type to see useTransition"
          value={name}
          onChangeText={handleNameChange}
        />
        <Text style={styles.demoText}>
          {isPending ? "Computing..." : `Deferred: ${deferredName}`}
        </Text>
      </View>

      {/* useDeferredValue */}
      <SubHeader>useDeferredValue:</SubHeader>
      <CodeBlock>{`const deferredValue = useDeferredValue(value);

// deferredValue lags behind value during heavy renders`}</CodeBlock>
      <BodyText>
        <BoldAccent>useDeferredValue</BoldAccent> defers updating a value until urgent work completes,
        optimizing performance for expensive UI updates.
      </BodyText>

      {/* useSyncExternalStore */}
      <SubHeader>useSyncExternalStore:</SubHeader>
      <CodeBlock>{`import { useSyncExternalStore } from 'react';

const state = useSyncExternalStore(
  subscribe,
  getSnapshot,
  getServerSnapshot
);`}</CodeBlock>
      <BodyText>
        <BoldAccent>useSyncExternalStore</BoldAccent> subscribes to an external data source,
        optimal for integrating with state management libraries outside React.
      </BodyText>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  demoContainer: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: "#282c34",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#373b47",
  },
  demoText: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#3a3f47",
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default AdvancedHooksScreen;