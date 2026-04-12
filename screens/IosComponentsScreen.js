import React from "react";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const IOSComponentsScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="iOS Components" />

      <SubHeader>InputAccessoryView</SubHeader>
      <BodyText style={{ color: "#f0f0f0" }}>
        InputAccessoryView displays an accessory view, such as a toolbar, above
        the keyboard on iOS devices.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { InputAccessoryView, TextInput } from 'react-native';

const inputAccessoryID = 'inputAccessory';

return (
  <TextInput
    style={styles.input}
    placeholder="Type here"
    inputAccessoryViewID={inputAccessoryID}
  />
  <InputAccessoryView nativeID={inputAccessoryID}>
    <View style={styles.toolbar}>
      <Text style={styles.toolbarText}>Custom Toolbar Above Keyboard</Text>
    </View>
  </InputAccessoryView>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above,{" "}
        <BoldAccent>InputAccessoryView</BoldAccent> is used to display a
        toolbar above the keyboard on iOS devices.
      </BodyText>

      <SubHeader>SafeAreaView</SubHeader>
      <BodyText style={{ color: "#f0f0f0" }}>
        SafeAreaView ensures that content is within the safe area boundaries of
        a device (e.g., iPhone X).
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { SafeAreaView } from 'react-native';

return (
  <SafeAreaView style={styles.safeArea}>
    <Text style={styles.safeAreaText}>Content within the safe area.</Text>
  </SafeAreaView>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above, <BoldAccent>SafeAreaView</BoldAccent> is
        used to ensure that content is displayed within the safe area boundaries
        of a device.
      </BodyText>
    </ScreenContainer>
  );
};

export default IOSComponentsScreen;
