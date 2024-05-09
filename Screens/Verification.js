import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import rw from "twrnc";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import ButtonLayout from "../Layouts/ButtonLayout";

export default function Verification() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-1 p-3`}>
        <AntDesign
          name="arrowleft"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <View style={tw`py-5 flex-col gap-4`}>
          <Text style={[tw`text-3xl font-semibold`, { color: "#0F227A" }]}>
            Verification
          </Text>
          <Text style={tw`text-xs font-400`}>
            Please enter the 5 digits code sent to your phone number
          </Text>
        </View>

        <View style={rw`flex flex-col items-center`}>
          <OTPInputView
            autoFocusOnLoad
            pinCount={5}
            style={[
              rw``,
              {
                width: "80%",
                height: 100,
              },
            ]}
            codeInputFieldStyle={tw`text-gray-500 border-2 border-black`}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
              navigation.navigate("DigitsPin");
            }}
          />
          <Text
            style={{ color: "#3E3D75ß", fontSize: "15px", fontWeight: 500 }}
          >
            Resend code in 01:26
          </Text>
        </View>
        <View style={tw`py-25`}>
          <ButtonLayout title="Continue" />
        </View>
      </View>
    </SafeAreaView>
  );
}
