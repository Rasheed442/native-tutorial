import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Collection, Hometab, Profile, Trantab } from "../assets/assets/ICONS";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
export default function Tab({ children }) {
  const Navigation = useNavigation();
  const TabsLayout = [
    {
      name: "Home",
      icon: <Hometab />,
      route: "Dashboard",
    },
    {
      name: "Services",
      icon: <Collection stroke="#03B66B" strokeWidth={5} />,
      route: "Services",
    },
    {
      name: "Transactions",
      icon: <Trantab />,
      route: "Transactions",
    },
    {
      name: "Account",
      icon: <Profile />,
      route: "Account",
    },
  ];
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw` flex-1`}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
        {/* <View>{children}</View> */}
      </View>
      <View style={[tw` justify-end `]}>
        <View
          style={[
            tw`flex flex-row justify-between items-center p-3 border-t-2`,
            { borderColor: "gainsboro" },
          ]}
        >
          {TabsLayout.map((t) => {
            return (
              <TouchableOpacity
                style={tw`flex flex-col  items-center gap-2`}
                onPress={() => {
                  Navigation.navigate(t?.route);
                }}
              >
                <View
                //  style={tw`${t?.route ? `bg-green-500` : ``}`}
                >
                  {t?.icon}
                </View>
                <Text>{t?.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}
