import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import rw from "twrnc";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import ButtonLayout from "../Layouts/ButtonLayout";
import PasswordInput from "../Layouts/PasswordInput";
import { check } from "../assets/assets/IMAGES";

export default function ResetPassword() {
  const navigation = useNavigation();
  const [successPop, setSuccessPop] = useState(false);
  return (
    <SafeAreaView style={tw`flex-1`}>
      {successPop && (
        <Modal animationType="slide">
          <SafeAreaView style={tw`flex-1 `}>
            <View style={tw`flex-1 justify-center gap-10  items-center`}>
              <Image
                source={check}
                style={{ width: 200, height: 200, resizeMode: "contain" }}
              />
              <Text style={tw`text-2xl`}>Your Password has been reset</Text>
            </View>
            <View style={tw`mb-10 p-5`}>
              <ButtonLayout
                title="Sign In"
                onPress={() => navigation.navigate("Signin")}
              />
            </View>
          </SafeAreaView>
        </Modal>
      )}
      <View style={tw`flex-1 p-3`}>
        <AntDesign
          name="arrowleft"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <View style={tw`py-5 flex-col gap-2`}>
          <Text style={[tw`text-3xl font-semibold`, { color: "#0F227A" }]}>
            Reset Password
          </Text>
          <Text style={tw`text-xs font-400`}>
            Please enter the 6 digits code sent to your phone number
          </Text>
        </View>

        <View style={tw`flex flex-col gap-5 py-10`}>
          <PasswordInput
            title="New Password"
            placeholder="Enter New Password"
          />
          <PasswordInput
            title="Confirm new Password"
            placeholder="Enter Old Password"
          />
        </View>
        <View style={tw`py-25`}>
          <ButtonLayout
            title="Reset Password"
            onPress={() => setSuccessPop(true)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
