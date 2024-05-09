import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";
import tw from "twrnc";
export default function LabelInput({
  title,
  placeholder,
  onChange,
  value,
  inputMode,
}) {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={tw`flex-col gap-3`}>
        <Text style={tw`font-500`}>{title}</Text>
        <TextInput
          placeholder={placeholder}
          style={[tw`border-2 p-3 rounded-lg`, { borderColor: "#D3D3D3" }]}
          onChange={onChange}
          value={value}
          keyboardType="default"
        />
      </View>
    </KeyboardAvoidingView>
  );
}
