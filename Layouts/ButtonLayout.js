import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
export default function ButtonLayout({ title, onPress }) {
  return (
    <TouchableOpacity
      style={tw` bg-green-600 p-3 rounded-lg`}
      onPress={onPress}
    >
      <Text style={tw`text-center text-white text-xl font-500`}>{title}</Text>
    </TouchableOpacity>
  );
}
