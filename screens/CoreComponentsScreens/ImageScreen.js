import React from "react";
import { View, Text, Image } from "react-native";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const ImageScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Image Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
        The <BoldAccent>Image</BoldAccent> component is used to display
        images in a React Native app. It supports both local and remote image
        sources and provides various styling options.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { Image } from 'react-native';

return (
  <Image
    source={require('./path-to-image.png')}
    style={{ width: 100, height: 100 }}
  />
);`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In the example above, a local image file is displayed using the{" "}
        <BoldAccent>Image</BoldAccent> component.
      </BodyText>

      <SubHeader>Remote Image Example:</SubHeader>
      <CodeBlock>{`
import { Image } from 'react-native';

return (
  <Image
    source={{ uri: 'https://example.com/image.png' }}
    style={{ width: 200, height: 200 }}
  />
);`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        The above code demonstrates displaying an image from a remote URL.
      </BodyText>

      <SubHeader>Example Preview:</SubHeader>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={{ width: 100, height: 100, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 14, color: "#b4b4b4" }}>React Native Logo</Text>
      </View>
    </ScreenContainer>
  );
};

export default ImageScreen;
