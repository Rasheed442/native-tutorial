import { View, Text, TextInput } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import tw from "twrnc";
export default function SearchInputLayout({ placeholder, onChange, value }) {
  return (
    <View
      style={[
        tw`flex  flex-row items-center pl-1 pr-1  border-2 w-full  rounded-lg`,
        { borderColor: "#D3D3D3", backgroundColor: "#EAEBEF" },
      ]}
    >
      <AntDesign name="search1" size={20} />
      <TextInput
        style={[
          tw` h-full p-3 `,
          { borderColor: "#D3D3D3", backgroundColor: "#EAEBEF" },
        ]}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        keyboardType="default"
      />
    </View>
  );
}
