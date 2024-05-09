import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function PhonenumberInput({
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
        <View
          style={[
            tw`flex-row border-2 rounded-lg  items-center `,
            { borderColor: "#D3D3D3" },
          ]}
        >
          <TouchableOpacity
            style={[tw`border-r-2 p-3 `, { borderRightColor: "#D3D3D3" }]}
          >
            <Text>
              +234 <AntDesign name="caretdown" size={10} color="gray" />
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder={placeholder}
            style={[
              tw`border-2  rounded-lg w-full px-2`,
              { borderColor: "transparent" },
            ]}
            onChange={onChange}
            value={value}
            inputMode={inputMode}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
