import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import tw from "twrnc";
import { Paymybills, pmb } from "../assets/assets/IMAGES";
import { useNavigation } from "@react-navigation/native";
import LabelInput from "../Layouts/LabelInput";
import PhonenumberInput from "../Layouts/PhonenumberInput";
import PasswordInput from "../Layouts/PasswordInput";
import ButtonLayout from "../Layouts/ButtonLayout";
export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 `}>
      <View style={tw`flex-1 p-3`}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw`flex-row  gap-18 py-5 `}>
              <AntDesign
                name="arrowleft"
                size={25}
                onPress={() => navigation.goBack()}
              />
              <View style={{ width: 150, height: 40 }}>
                <Paymybills width="100%" height="100%" />
              </View>
            </View>
            <View style={tw`py-6`}>
              <Text style={[tw`text-2xl font-500`, { color: "#0F227A" }]}>
                It's nice to have you here
              </Text>
              <Text style={[tw`text-sm`, { color: "#333333" }]}>
                Let's create your account
              </Text>
            </View>
            <View style={tw`flex-col gap-5`}>
              <LabelInput
                title="First Name"
                placeholder="Enter your first name"
              />
              <LabelInput
                title="Last Name"
                placeholder="Enter your Last name"
              />
              <LabelInput
                title="Email"
                placeholder="Enter your email address"
                inputMode="email"
              />
              <PhonenumberInput title="Phone Number" placeholder="0908777465" />
              <PasswordInput
                title="Create Password"
                placeholder="Choose Password"
              />
              <PasswordInput
                title="Confirm Password"
                placeholder="Retype Password"
              />
              <View>
                <ButtonLayout
                  title="Proceed"
                  onPress={() => navigation.navigate("Verification")}
                />
                <Text
                  style={[
                    tw`text-center flex items-center p-3 font-500`,
                    { display: "flex", alignItems: "center" },
                  ]}
                >
                  Already have an account?{" "}
                  <Text
                    style={tw`text-green-600`}
                    onPress={() => navigation.navigate("Signin")}
                  >
                    Sign in here
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
