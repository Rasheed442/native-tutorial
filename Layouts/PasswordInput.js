import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
export default function PasswordInput({
  title,
  placeholder,
  onChange,
  value,
  inputMode,
}) {
  const [eyeopen, setEyeOpen] = useState(true);
  return (
    <View style={tw`flex-col gap-3`}>
      <Text style={tw`font-500`}>{title}</Text>
      <View
        style={[
          tw`flex-row border-2 rounded-lg w-full  `,
          { borderColor: "#D3D3D3" },
        ]}
      >
        <TextInput
          placeholder={placeholder}
          style={[
            tw`border-2  rounded-lg w-10.5/12 p-3 `,
            { borderColor: "transparent" },
          ]}
          onChange={onChange}
          value={value}
          keyboardType="visible-password"
          secureTextEntry={eyeopen}
        />
        <TouchableOpacity
          style={[tw`border-l-2 border-gray-400  p-3 `]}
          onPress={() => setEyeOpen(!eyeopen)}
        >
          {eyeopen ? (
            <AntDesign name="eye" size={22} />
          ) : (
            <Entypo name="eye-with-line" size={22} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
