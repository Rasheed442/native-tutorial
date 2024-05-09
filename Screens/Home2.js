import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Paymybills, payment, pmb } from "../assets/assets/IMAGES";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Login() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const screenheight = Dimensions.get("window").height;
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-1 flex p-5 justify-around items-center`}>
        <View style={{ width: 200, height: 70 }}>
          <Paymybills width="100%" height="100%" />
        </View>
        <View style={tw` flex-col items-center gap-10`}>
          <Image source={payment} style={{ resizeMode: "contain" }} />
          <Text style={tw`text-2xl font-medium text-center`}>
            Pay your bills in a {"\n"} stress-free manner
          </Text>
        </View>
        <View style={tw`w-full flex-col gap-5`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("GetStarted")}
            style={tw`bg-green-600 w-full flex justify-center items-center p-3 rounded-lg`}
          >
            <Text style={tw`text-xl text-white`}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signin")}
            style={[
              tw` w-full border-2  border-green-600 items-center p-3 rounded-lg`,
            ]}
          >
            <Text style={tw`text-xl text-green-600  `}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
