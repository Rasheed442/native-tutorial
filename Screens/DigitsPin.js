import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import tw from "twrnc";
import { Paymybills, check, pmb } from "../assets/assets/IMAGES";
import { useNavigation } from "@react-navigation/native";
import LabelInput from "../Layouts/LabelInput";
import PhonenumberInput from "../Layouts/PhonenumberInput";
import PasswordInput from "../Layouts/PasswordInput";
import ButtonLayout from "../Layouts/ButtonLayout";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default function GetStarted() {
  const navigation = useNavigation();
  const [successPop, setSuccessPop] = useState(false);

  return (
    <SafeAreaView style={tw`flex-1 `}>
      {successPop && (
        <Modal animationType="slide">
          <SafeAreaView style={tw`flex-1 `}>
            <View style={tw`flex-1 justify-center gap-10  items-center`}>
              <Image
                source={check}
                style={{ width: 200, height: 200, resizeMode: "contain" }}
              />
              <Text style={tw`text-2xl`}>Success</Text>
              <Text style={tw`text-xl text-center`}>
                You have successfully registered in our app and can start
                working in it.
              </Text>
            </View>
            <View style={tw`mb-10 p-5`}>
              <ButtonLayout
                title="Start Using Our App"
                onPress={() => {
                  setSuccessPop(false), navigation.navigate("Dashboard");
                }}
              />
            </View>
          </SafeAreaView>
        </Modal>
      )}
      <View style={tw`flex-1 p-3`}>
        <KeyboardAvoidingView behavior="padding">
          <View style={tw`flex-row  gap-18 py-5 `}>
            <AntDesign
              name="arrowleft"
              size={25}
              onPress={() => navigation.goBack()}
            />
            <View style={{ width: 170, height: 50 }}>
              <Paymybills width="100%" height="100%" />
            </View>
          </View>
          <View style={tw`py-6`}>
            <Text style={[tw`text-2xl font-500`, { color: "#0F227A" }]}>
              Create your 4-digits PIN
            </Text>
            <Text style={[tw`text-sm`, { color: "#333333" }]}>
              Set your 4-digit PIN to pay bills
            </Text>
          </View>
          <View style={tw`flex items-center py-10`}>
            <OTPInputView
              autoFocusOnLoad
              pinCount={4}
              style={[
                {
                  width: "80%",
                  height: 100,
                },
              ]}
              codeInputFieldStyle={tw`text-gray-500 border-2 border-black`}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
                setSuccessPop(true);
              }}
            />
          </View>
          <ButtonLayout title="Continue" />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
