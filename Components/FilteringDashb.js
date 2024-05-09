import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import BottomSheet from "react-native-simple-bottom-sheet";
import tw from "twrnc";
import Checkbox from "expo-checkbox";
import { CheckBox } from "@rneui/themed";

export default function FilteringDashb() {
  const [selectedIndex, setIndex] = React.useState(0);
  const [check, setCheck] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const panelRef = useRef(null);

  return (
    <BottomSheet ref={(ref) => (panelRef.current = ref)}>
      <View style={tw`flex flex-row justify-between pr-5 gap-30 items-center`}>
        <Text style={tw`text-xl font-500`}>Filter</Text>
        <Text style={tw`text-green-500 font-semibold`}>Clear</Text>
      </View>
      <View style={tw`p-3 flex flex-col gap-3`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text>Weekly</Text>

          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "green" : undefined}
          />
        </View>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text>Monthly</Text>

          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "green" : undefined}
          />
        </View>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text>Yearly</Text>

          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "green" : undefined}
          />
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
