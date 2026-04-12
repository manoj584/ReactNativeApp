import React from "react";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const ImageBackgroundScreen = () => {
  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="ImageBackground Component" />

      <BodyText style={{ color: "#f0f0f0" }}>
        The <BoldAccent>ImageBackground</BoldAccent> component is used
        to display an image as the background of a view. It supports nesting
        other components inside it.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { ImageBackground, Text } from 'react-native';

const image = { uri: 'https://example.com/background-image.jpg' };

return (
  <ImageBackground
    source={image}
    style={{ width: '100%', height: '100%' }}
  >
    <Text style={{ color: 'white' }}>Hello, Background!</Text>
  </ImageBackground>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In the example above, an image is set as the background, and a{" "}
        <BoldAccent>Text</BoldAccent> component is displayed over it.
      </BodyText>

      <SubHeader>Custom Styling Example:</SubHeader>
      <CodeBlock>{`
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

const image = { uri: 'https://example.com/background-image.jpg' };

return (
  <ImageBackground source={image} style={styles.background}>
    <View style={styles.overlay}>
      <Text style={styles.text}>Overlay Content</Text>
    </View>
  </ImageBackground>
);`}</CodeBlock>
      <BodyText style={{ color: "#f0f0f0" }}>
        In this example, a semi-transparent overlay is added over the background
        image with text content inside it.
      </BodyText>
    </ScreenContainer>
  );
};

export default ImageBackgroundScreen;
