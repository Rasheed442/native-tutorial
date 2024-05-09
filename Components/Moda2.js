import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function Modal2({ closeModal }) {
  return (
    <SafeAreaView style={style.top}>
      <Modal animationType="slide">
        <View style={style.container2}>
          <Text>Hiiii Rashed</Text>
          <Button title="Close Modal" onPress={() => closeModal(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  top: {
    flex: 1,
  },
  container2: {
    backgroundColor: "brown",
  },
});
