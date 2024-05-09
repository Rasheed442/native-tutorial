import { Text, View } from "react-native";
import React from "react";
import Tab from "../Components/Tab";
import tw from "twrnc";
import { Wifi } from "../assets/assets/ICONS";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function Services() {
  const billpayment = [
    {
      logo: <Wifi />,
      title: "Data Subsciption",
      icom: <AntDesign name="right" size={20} color="green" />,
    },
    {
      logo: <Wifi />,
      title: "Airtime Topup",
      icom: <AntDesign name="right" size={20} color="green" />,
    },
    {
      logo: <Wifi />,
      title: "Electricity bill payment",
      icom: <AntDesign name="right" size={20} color="green" />,
    },
  ];
  return (
    <Tab>
      <View
        style={tw`flex flex-row p-3 justify-center border-b-green-500 border-b-2`}
      >
        <Text style={tw`text-2xl font-500`}>Services</Text>
      </View>
      <View style={[tw`p-3 mt-3  bg-white`]}>
        <Text style={[tw`text-xs pb-5  font-700`, { color: "#BBBBBB" }]}>
          BILLS PAYMENT
        </Text>
        <View style={tw`flex flex-col gap-6`}>
          {billpayment.map((b) => {
            return (
              <View
                style={[
                  tw`flex flex-row justify-between pb-5 border-b-2 items-center`,
                  { borderBottomColor: "#DDDDDD" },
                ]}
              >
                <View style={tw`flex flex-row items-center gap-8`}>
                  <View>{b?.logo}</View>
                  <Text style={tw`text-base font-400`}>{b?.title}</Text>
                </View>

                <View>{b?.icom}</View>
              </View>
            );
          })}
        </View>
      </View>
      <View style={[tw`p-3 mt-3  bg-white`]}>
        <Text style={[tw`text-xs pb-5  font-700`, { color: "#BBBBBB" }]}>
          INTERNET AND CABLE
        </Text>
        <View style={tw`flex flex-col gap-6`}>
          {billpayment.map((b) => {
            return (
              <View
                style={[
                  tw`flex flex-row justify-between pb-5 border-b-2 items-center`,
                  { borderBottomColor: "#DDDDDD" },
                ]}
              >
                <View style={tw`flex flex-row items-center gap-8`}>
                  <View>{b?.logo}</View>
                  <Text style={tw`text-base font-400`}>{b?.title}</Text>
                </View>

                <View>{b?.icom}</View>
              </View>
            );
          })}
        </View>
      </View>
      <View style={[tw`p-3 mt-3  bg-white`]}>
        <Text style={[tw`text-xs pb-5  font-700`, { color: "#BBBBBB" }]}>
          OTHER SERVICES
        </Text>
        <View style={tw`flex flex-col gap-6`}>
          {billpayment.map((b) => {
            return (
              <View
                style={[
                  tw`flex flex-row justify-between pb-5 border-b-2 items-center`,
                  { borderBottomColor: "#DDDDDD" },
                ]}
              >
                <View style={tw`flex flex-row items-center gap-8`}>
                  <View>{b?.logo}</View>
                  <Text style={tw`text-base font-400`}>{b?.title}</Text>
                </View>

                <View>{b?.icom}</View>
              </View>
            );
          })}
        </View>
      </View>
    </Tab>
  );
}
