import React from "react";
import {
  ScreenContainer,
  ScreenHeader,
  SubHeader,
  BodyText,
  BoldAccent,
  CodeBlock,
} from "../components/ui";

const AndroidComponentsScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Android Components" />

      <SubHeader>DrawerLayoutAndroid</SubHeader>
      <BodyText style={{ color: "#b4b4b4" }}>
        DrawerLayoutAndroid provides a sliding drawer for Android apps.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { DrawerLayoutAndroid } from 'react-native';

const drawer = useRef(null);

return (
  <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition="left"
    renderNavigationView={() => (
      <View style={styles.drawerContent}>
        <Text style={styles.drawerText}>This is the drawer content.</Text>
      </View>
    )}
  >
    <TouchableNativeFeedback onPress={() => drawer.current.openDrawer()}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Open Drawer</Text>
      </View>
    </TouchableNativeFeedback>
  </DrawerLayoutAndroid>
);`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In the example above,{" "}
        <BoldAccent>DrawerLayoutAndroid</BoldAccent> is used to create a
        sliding drawer. The drawer can be opened with a button press.
      </BodyText>

      <SubHeader>TouchableNativeFeedback</SubHeader>
      <BodyText style={{ color: "#b4b4b4" }}>
        TouchableNativeFeedback creates native feedback effects on Android, like
        ripple effects.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { TouchableNativeFeedback } from 'react-native';

return (
  <TouchableNativeFeedback onPress={() => alert("Pressed!")}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Press Me</Text>
    </View>
  </TouchableNativeFeedback>
);`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In the example above,{" "}
        <BoldAccent>TouchableNativeFeedback</BoldAccent> is used to add
        ripple effect when the button is pressed.
      </BodyText>
    </ScreenContainer>
  );
};

export default AndroidComponentsScreen;
