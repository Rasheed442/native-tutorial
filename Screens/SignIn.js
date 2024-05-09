import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { pmb } from "../assets/assets/IMAGES";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import PhonenumberInput from "../Layouts/PhonenumberInput";
import PasswordInput from "../Layouts/PasswordInput";
import ButtonLayout from "../Layouts/ButtonLayout";
export default function SignIn() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-1 p-3`}>
        <View style={tw`flex-row  gap-18 py-5 `}>
          <AntDesign
            name="arrowleft"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Image source={pmb} />
        </View>
        <View style={tw`py-6`}>
          <Text style={[tw`text-2xl font-500`, { color: "#0F227A" }]}>
            Welcome Back
          </Text>
          <Text style={[tw`text-sm`, { color: "#333333" }]}>
            Sign in into your account to continue
          </Text>
        </View>
        <View style={tw`flex-col gap-8`}>
          <PhonenumberInput placeholder="09027354839" title="Phone Number" />
          <PasswordInput title="Password" placeholder="Enter Password" />
        </View>
        <View style={tw`py-10 `}>
          <ButtonLayout
            title="Sign In"
            onPress={() => navigation.navigate("Dashboard")}
          />
          <View style={tw`flex-col justify-center items-center gap-3 py-5`}>
            <Text
              style={tw`text-green-600`}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot Password
            </Text>
            <Text>
              Don't have account?{" "}
              <Text
                style={tw`text-green-600`}
                onPress={() => navigation.navigate("GetStarted")}
              >
                Create one
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
