import { View, Text } from "react-native";
import React, { useState } from "react";
import Tab from "../Components/Tab";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import SearchInputLayout from "../Layouts/SearchInputLayout";
import { Mobile } from "../assets/assets/ICONS";
export default function Transactions() {
  const [all, setAll] = useState(true);
  const [successful, setSuccessful] = useState(false);
  const [UnSuccessful, setUnSuccessful] = useState(false);

  const Transactions = [
    {
      logo: <Mobile />,
      title: "Airtime Topup",
      number: "09127805458",
      status: "Successful",
      amount: "500000",
    },
    {
      logo: <Mobile />,
      title: "Airtime Topup",
      number: "0707805458",
      status: "Failed",
      amount: "500000",
    },
    {
      logo: <Mobile />,
      title: "Data Topup",
      number: "09127805458",
      status: "Successful",
      amount: "500000",
    },
  ];
  return (
    <Tab>
      <View
        style={[
          tw`flex flex-row p-3 justify-between border-b-2 border-b-green-500`,
          {},
        ]}
      >
        <Text style={tw`w-10%`}></Text>
        <Text style={[tw`text-xl w-80%  text-center font-semibold`]}>
          Transaction History
        </Text>
        <Ionicons
          color="#999999"
          name="filter-outline"
          size={25}
          onPress={() => navigation.goBack()}
          style={tw`w-10%`}
        />
      </View>
      <View style={tw`p-4`}>
        <SearchInputLayout placeholder="Search transactions" />
      </View>
      <View
        style={[
          tw`flex border flex-row gap-3 justify-between ml-4 p-1 rounded-l mr-4 `,
          { borderColor: "#DDDDDD" },
        ]}
      >
        <Text
          onPress={() => {
            setUnSuccessful(false), setSuccessful(false), setAll(true);
          }}
          style={tw`${all ? `bg-green-600` : ``} w-30% p-1 text-center ${
            all ? `text-white` : ``
          } text-sm font-500`}
        >
          All
        </Text>
        <Text
          onPress={() => {
            setUnSuccessful(false), setSuccessful(true), setAll(false);
          }}
          style={[
            tw`${
              successful ? `bg-green-600` : ``
            } w-30% text-center p-1 text-sm font-500 ${
              successful ? `text-white` : ``
            }`,
          ]}
        >
          Successful
        </Text>
        <Text
          onPress={() => {
            setUnSuccessful(true), setSuccessful(false), setAll(false);
          }}
          style={tw`${UnSuccessful ? `bg-green-600` : ``} w-30% text-center ${
            UnSuccessful ? `text-white` : ``
          }  p-1 text-sm font-500`}
        >
          UnSuccessful
        </Text>
      </View>

      <View style={[tw`py-7 pl-4 pr-4 `, {}]}>
        <Text style={[tw`text-xs`, { color: "gray" }]}>
          FRIDAY, 07 APR 2022
        </Text>
        {Transactions.map((t) => {
          return (
            <View style={tw`flex flex-row justify-between py-5 items-center`}>
              <View style={tw`flex flex-row gap-4`}>
                <View>{t?.logo}</View>
                <View>
                  <Text>{t?.title}</Text>
                  <Text>{t?.number}</Text>
                </View>
              </View>
              <Text
                style={tw`${
                  t?.status === "Successful"
                    ? `text-green-600`
                    : t?.status === "Failed"
                    ? `text-red-500`
                    : ``
                }`}
              >
                {t?.status}
              </Text>
              <Text>{t?.amount}</Text>
            </View>
          );
        })}
      </View>
      <View style={[tw`py-7 pl-4 pr-4 `, {}]}>
        <Text style={[tw`text-xs`, { color: "gray" }]}>
          FRIDAY, 07 APR 2022
        </Text>
        {Transactions.map((t) => {
          return (
            <View style={tw`flex flex-row justify-between py-5 items-center`}>
              <View style={tw`flex flex-row gap-4`}>
                <View>{t?.logo}</View>
                <View>
                  <Text>{t?.title}</Text>
                  <Text>{t?.number}</Text>
                </View>
              </View>
              <Text
                style={tw`${
                  t?.status === "Successful"
                    ? `text-green-600`
                    : t?.status === "Failed"
                    ? `text-red-500`
                    : ``
                }`}
              >
                {t?.status}
              </Text>
              <Text>{t?.amount}</Text>
            </View>
          );
        })}
      </View>
    </Tab>
  );
}
