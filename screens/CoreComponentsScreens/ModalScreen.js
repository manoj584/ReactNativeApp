import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button, TouchableOpacity } from "react-native";
import {
  ScreenContainer, ScreenHeader, SubHeader, BodyText, BoldAccent, CodeBlock,
} from "../../components/ui";

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <ScreenHeader title="Modal Component" />

      <BodyText style={{ color: "#b4b4b4" }}>
        The <BoldAccent>Modal</BoldAccent> component is used to create
        an overlay that can be displayed on top of the current view. It is
        commonly used for pop-ups or custom dialogs.
      </BodyText>

      <SubHeader>Syntax Example:</SubHeader>
      <CodeBlock>{`
import { Modal, View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>This is a Modal!</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
    </View>
  );
};`}</CodeBlock>
      <BodyText style={{ color: "#b4b4b4" }}>
        In the example above, a <BoldAccent>Modal</BoldAccent> is
        triggered by a button. It uses the{" "}
        <BoldAccent>animationType</BoldAccent> property to define the
        opening animation and <BoldAccent>onRequestClose</BoldAccent>{" "}
        for closing functionality.
      </BodyText>

      <SubHeader>Demo:</SubHeader>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is a Modal Demo!</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: { fontSize: 18, marginBottom: 15 },
  closeButton: { backgroundColor: "#61dafb", padding: 10, borderRadius: 5 },
  closeButtonText: { color: "#ffffff", fontWeight: "bold" },
});

export default ModalScreen;
