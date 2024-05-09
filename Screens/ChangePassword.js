import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import tw from "twrnc";
import LabelInput from "../Layouts/LabelInput";
import PhonenumberInput from "../Layouts/PhonenumberInput";
import ButtonLayout from "../Layouts/ButtonLayout";
import { useNavigation } from "@react-navigation/native";
import PasswordInput from "../Layouts/PasswordInput";
export default function ChangePassword() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior="padding">
      <SafeAreaView style={tw``}>
        <View
          style={tw`flex flex-row justify-between items-center p-3 border-b-2 border-green-600`}
        >
          <Feather
            name="arrow-left"
            size={30}
            style={tw`w-10%`}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={tw`text-xl font-500 w-80% text-center`}>
            Change Password
          </Text>
          <View style={tw`w-10%`}></View>
        </View>

        <View style={tw`flex flex-col justify-between `}>
          <View style={tw`p-3 pt-10 flex flex-col gap-6`}>
            <PasswordInput
              placeholder="input old password"
              title="Old Password"
            />
            <PasswordInput
              placeholder="input new password"
              title="New Password"
            />
            <PasswordInput
              placeholder="confirm password"
              title="Confirm New Password"
            />
          </View>

          <View style={tw`p-3 pt-15 `}>
            <ButtonLayout title="Change Password" />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
