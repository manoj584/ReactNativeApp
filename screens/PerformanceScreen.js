import React, { useState, useCallback, useMemo } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

// Memoized list item component (defined outside component body to prevent recreate-on-render warning)
const MemoizedItem = React.memo(({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{item.value}</Text>
  </View>
));

const PerformanceScreen = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `Item ${i}` })));

  // Expensive computation example
  const expensiveValue = useMemo(() => {
    console.log("Computing expensive value...");
    return count * 1000;
  }, [count]);

  // Memoized callback
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Performance Optimization" />

      {/* React.memo */}
      <SubHeader>React.memo:</SubHeader>
      <CodeBlock>{`const MemoizedComponent = React.memo(({ prop }) => {
  return <View>{prop}</View>;
});

// Only re-renders if props change`}</CodeBlock>
      <BodyText>
        <BoldAccent>React.memo</BoldAccent> prevents unnecessary re-renders of components when props
        haven't changed. Essential for optimizing list items and child components.
      </BodyText>

      {/* useMemo */}
      <SubHeader>useMemo:</SubHeader>
      <CodeBlock>{`const expensiveValue = useMemo(() => {
  return heavyComputation(data);
}, [data]);

// Only recalculates when data changes`}</CodeBlock>
      <BodyText>
        <BoldAccent>useMemo</BoldAccent> memoizes expensive calculations, preventing them from
        running on every render. Use it for heavy computations and derived state.
      </BodyText>
      <View style={styles.demoBox}>
        <Text style={styles.demoText}>Count: {count}</Text>
        <Text style={styles.demoText}>Expensive: {expensiveValue}</Text>
        <Button title="Increment" onPress={handleClick} color="#61dafb" />
      </View>

      {/* useCallback */}
      <SubHeader>useCallback:</SubHeader>
      <CodeBlock>{`const memoizedCallback = useCallback(() => {
    doSomething(dependency);
  }, [dependency]);

// Prevents function recreation on every render`}</CodeBlock>
      <BodyText>
        <BoldAccent>useCallback</BoldAccent> memoizes callback functions, preventing their
        recreation and maintaining referential equality. Critical for child component optimization.
      </BodyText>

      {/* Virtualization */}
      <SubHeader>FlatList & Virtualization:</SubHeader>
      <CodeBlock>{`<FlatList
  data={largeDataSet}
  renderItem={({ item }) => <ItemComponent item={item} />}
  keyExtractor={(item) => item.id}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
/>`}</CodeBlock>
      <BodyText>
        <BoldAccent>FlatList</BoldAccent> virtualizes long lists, rendering only visible items.
        Configure props like <BoldAccent>initialNumToRender</BoldAccent>, <BoldAccent>maxToRenderPerBatch</BoldAccent>,
        and <BoldAccent>windowSize</BoldAccent> for optimal performance.
      </BodyText>
      <View style={styles.listContainer}>
        <FlatList
          data={items.slice(0, 20)}
          renderItem={({ item }) => <MemoizedItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
          scrollEnabled={false}
        />
      </View>

      {/* Image Optimization */}
      <SubHeader>Image Optimization:</SubHeader>
      <CodeBlock>{`<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 100, height: 100 }}
  resizeMode="cover"
  defaultSource={require('./placeholder.png')}
/>`}</CodeBlock>
      <BodyText>
        Use <BoldAccent>resizeMode</BoldAccent> appropriately, provide <BoldAccent>defaultSource</BoldAccent>,
        and consider using <BoldAccent>fast-image</BoldAccent> library for better caching and performance.
      </BodyText>

      {/* Avoid Anonymous Functions */}
      <SubHeader>Avoid Anonymous Functions:</SubHeader>
      <CodeBlock>{`// BAD - Creates new function on every render
<Button onPress={() => handleClick()} />

// GOOD - Uses stable function reference
<Button onPress={handleClick} />`}</CodeBlock>
      <BodyText>
        Avoid inline arrow functions in render props. They cause child components to re-render
        unnecessarily. Use useCallback or define functions outside render.
      </BodyText>

      {/* Key Extraction */}
      <SubHeader>Proper Key Extraction:</SubHeader>
      <CodeBlock>{`// GOOD - Stable, unique keys
<FlatList
  keyExtractor={(item) => item.id}
  data={items}
/>

// BAD - Using index as key
<FlatList
  keyExtractor={(item, index) => index.toString()}
  data={items}
/>`}</CodeBlock>
      <BodyText>
        Always use stable, unique keys for list items. Using index as key can cause rendering
        issues and performance problems, especially with dynamic lists.
      </BodyText>

      {/* Avoid setState in Render */}
      <SubHeader>Avoid setState in Render:</SubHeader>
      <CodeBlock>{`// BAD - Causes infinite loop
const Component = () => {
  const [count, setCount] = useState(0);
  setCount(count + 1); // This will cause infinite loop
  return <View />;
};

// GOOD - Use useEffect
const Component = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, []);
  return <View />;
};`}</CodeBlock>
      <BodyText>
        Never call setState directly in render. Use useEffect for side effects and state updates
        based on props or other state changes.
      </BodyText>

      {/* PureComponent */}
      <SubHeader>PureComponent:</SubHeader>
      <CodeBlock>{`class MyComponent extends React.PureComponent {
  render() {
    return <View>{this.props.value}</View>;
  }
}

// Automatically implements shouldComponentUpdate`}</CodeBlock>
      <BodyText>
        <BoldAccent>PureComponent</BoldAccent> automatically implements shouldComponentUpdate with
        shallow prop comparison. Use it for class components that need performance optimization.
      </BodyText>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  demoBox: {
    backgroundColor: "#282c34",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#373b47",
    alignItems: "center",
  },
  demoText: {
    color: "#ffffff",
    fontSize: 16,
    marginVertical: 5,
  },
  listContainer: {
    height: 200,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#373b47",
    borderRadius: 8,
  },
  flatList: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#373b47",
  },
  itemText: {
    color: "#ffffff",
  },
});

export default PerformanceScreen;