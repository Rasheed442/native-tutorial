import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import BottomSheet from "react-native-simple-bottom-sheet";

export default function BottomSheetSample() {
  const panelRef = useRef(null);
  const [open, setOpen] = useState();

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text>Your Content</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setOpen(!open), panelRef?.current?.togglePanel();
        }}
      >
        <Text>Toggle</Text>
      </TouchableOpacity>
      {open && (
        <BottomSheet ref={(ref) => (panelRef.current = ref)}>
          <Text style={{ paddingVertical: 20 }}>Some random content</Text>
        </BottomSheet>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
