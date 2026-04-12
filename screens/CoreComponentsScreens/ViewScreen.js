import React from "react";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const ViewScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="View Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>View</BoldAccent> component is the most commonly
        used container component in React Native. It is used to define the
        layout and structure of the UI. It can be styled and nested within other
        views to build complex interfaces.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { View, Text } from 'react-native';

return (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, World!</Text>
  </View>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above, <BoldAccent>View</BoldAccent> is used to
        wrap the <BoldAccent>Text</BoldAccent> component. The container
        is styled using a simple style object.
      </BodyText>

      <SubHeader>Styling the View</SubHeader>
      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>View</BoldAccent> component can be styled using
        properties like <BoldAccent>padding</BoldAccent>,{" "}
        <BoldAccent>margin</BoldAccent>,{" "}
        <BoldAccent>backgroundColor</BoldAccent>,{" "}
        <BoldAccent>alignItems</BoldAccent>, and more.
      </BodyText>

      <SubHeader>Styled View Example:</SubHeader>
      <CodeBlock>{`
import { View, Text } from 'react-native';

return (
  <View style={styles.styledView}>
    <Text style={styles.text}>Styled View Component</Text>
  </View>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above, the <BoldAccent>View</BoldAccent> is
        styled with a background color, padding, and border radius.
      </BodyText>

      <SubHeader>SafeAreaView</SubHeader>
      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>SafeAreaView</BoldAccent> component ensures that
        content is not obscured by areas like the notch or home bar on modern
        devices.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { SafeAreaView } from 'react-native';

return (
  <SafeAreaView style={styles.safeArea}>
    <Text style={styles.text}>Content within the safe area.</Text>
  </SafeAreaView>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above, the <BoldAccent>SafeAreaView</BoldAccent>{" "}
        component is used to ensure that content is displayed within the safe
        area.
      </BodyText>
    </ScreenContainer>
  );
};

export default ViewScreen;
