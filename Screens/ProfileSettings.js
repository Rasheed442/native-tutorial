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
export default function ProfileSettings() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={tw`flex-1`} behavior="padding">
      <SafeAreaView>
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
            Profile Settings
          </Text>
          <View style={tw`w-10%`}></View>
        </View>

        <View style={tw`p-3 pt-10 flex flex-col gap-6`}>
          <LabelInput title="First Name" placeholder="Freeman" />
          <LabelInput title="Last Name" placeholder="Morgan" />
          <LabelInput title="Email" placeholder="freemanmorgan@gmail.com" />
          <PhonenumberInput placeholder="09127805458" />
          <LabelInput title="Gender" placeholder="Enter Gender" />

          <ButtonLayout title="Save Changes" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
