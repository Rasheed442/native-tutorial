import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import LabelInput from "../Layouts/LabelInput";
import ButtonLayout from "../Layouts/ButtonLayout";
import ModalLayout from "../Layouts/ModalLayout";
import { mail } from "../assets/assets/IMAGES";
export default function ForgotPassword() {
  const navigation = useNavigation();
  const [modalPop, setModalPop] = useState(false);
  return (
    <SafeAreaView style={tw`flex-1`}>
      {modalPop ? (
        // <ModalLayout closeModalPop={setModalPop} />
        <ModalLayout>
          <View style={tw`flex items-center gap-5 py-2`}>
            <Image source={mail} />
            <Text style={tw`text-2xl`}>Reset Link Sent</Text>
            <Text style={tw`text-center`}>
              A password reset link has been sent to “example@email.com” ,
              kindly check your mailbox.
            </Text>
            <ButtonLayout
              title="Close"
              onPress={() => {
                setModalPop(false),
                  setTimeout(() => {
                    navigation.navigate("ResetPassword");
                  }, 500);
              }}
            />
          </View>
        </ModalLayout>
      ) : (
        <View style={tw`flex-1 p-3 flex-col justify-between`}>
          <View>
            <AntDesign
              name="arrowleft"
              size={25}
              onPress={() => navigation.goBack()}
            />
            <View style={tw`py-5 flex-col gap-2`}>
              <Text style={[tw`text-3xl font-semibold`, { color: "#0F227A" }]}>
                Verification
              </Text>
              <Text style={tw`text-xs font-400`}>
                Don't fret! Enter the email associated with your account
              </Text>

              <View style={tw`py-5`}>
                <LabelInput
                  title="Email"
                  placeholder="abdulraufrasheed15@gmail.com"
                />
              </View>
            </View>
          </View>
          <ButtonLayout title="Continue" onPress={() => setModalPop(true)} />
        </View>
      )}
    </SafeAreaView>
  );
}
