import React, { useState } from "react";
import { Switch } from "react-native";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Switch Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>Switch</BoldAccent> component is used to create
        a toggle button that can either be on or off. It's commonly used to
        allow users to enable or disable a setting.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { Switch } from 'react-native';

const [isEnabled, setIsEnabled] = useState(false);

return (
  <Switch
    value={isEnabled}
    onValueChange={(value) => setIsEnabled(value)}
  />
);`}</CodeBlock>

      <SubHeader>Switch Example:</SubHeader>
      <BodyText style={{ color: "#f0f0f0" }}>
        Below is an example of using the Switch component. The state of the
        switch (on or off) is controlled by the{" "}
        <BoldAccent>isEnabled</BoldAccent> state variable.
      </BodyText>

      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
      />
      <BodyText style={{ color: "#f0f0f0" }}>The switch is {isEnabled ? "ON" : "OFF"}.</BodyText>
    </ScreenContainer>
  );
};

export default SwitchScreen;
