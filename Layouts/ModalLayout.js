import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { Children } from "react";
import tw from "twrnc";
import { mail } from "../assets/assets/IMAGES";
import ButtonLayout from "./ButtonLayout";
import { useNavigation } from "@react-navigation/native";

export default function ModalLayout({ closeModalPop, children, onPress }) {
  const navigation = useNavigation("");
  const ScreenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView style={tw`flex-1`}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          tw`flex-1 w-full position-fixed h-full flex justify-center items-center`,
          { backgroundColor: "rgba(0, 0, 0, 0.527)1" },
        ]}
      >
        <View style={[tw`bg-white  p-10 w-90% relative  flex rounded-2xl p-4`]}>
          {children}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
