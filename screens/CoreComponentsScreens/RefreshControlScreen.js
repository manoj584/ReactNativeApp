import React, { useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
import {
  ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const RefreshControlScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1, justifyContent: "center", alignItems: "center",
        padding: 20, backgroundColor: "#282c34", paddingBottom: 30,
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      <ScreenHeader title="RefreshControl Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>RefreshControl</BoldAccent> component is used to
        implement pull-to-refresh functionality in a scrollable view (e.g., a
        list).
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { RefreshControl, ScrollView } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
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
};`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above, a <BoldAccent>RefreshControl</BoldAccent>{" "}
        is attached to a <BoldAccent>ScrollView</BoldAccent> to allow
        pull-to-refresh functionality.
      </BodyText>

      <SubHeader>Pull to Refresh Demo</SubHeader>
      <BodyText style={{ color: "#f0f0f0" }}>
        Pull down to trigger the refresh action. The screen will simulate data
        refreshing.
      </BodyText>
    </ScrollView>
  );
};

export default RefreshControlScreen;
