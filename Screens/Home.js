import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { Paymybills, pmb } from "../assets/assets/IMAGES";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home2");
    }, 2000);
  }, []);

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <SafeAreaView>
        <View style={[tw`p-5`, { width: screenWidth, height: screenHeight }]}>
          <Paymybills width="100%" height="100%" />
        </View>
      </SafeAreaView>
    </View>
  );
}
