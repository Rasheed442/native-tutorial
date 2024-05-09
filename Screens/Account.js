import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Tab from "../Components/Tab";
import tw from "twrnc";
import { BgAccount, Mobile2 } from "../assets/assets/ICONS";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import Entypo from "react-native-vector-icons/Entypo";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
export default function Account() {
  const navigations = useNavigation();
  const profiles = [
    {
      logo: <Mobile2 />,
      comment: "Profile Settings",
      icon: <Entypo name="chevron-thin-right" size={20} />,
    },
    {
      logo: <Mobile2 />,
      comment: "Change Password",
      icon: <Entypo name="chevron-thin-right" size={20} />,
    },
    {
      logo: <Mobile2 />,
      comment: "Change Pin",
      icon: <Entypo name="chevron-thin-right" size={20} />,
    },
  ];
  return (
    <Tab>
      <StatusBar backgroundColor="red" />
      <View style={tw`flex-1 relative`}>
        <View style={tw`flex relative flex-col justify-center items-center`}>
          <BgAccount />
          <View
            style={tw`flex absolute flex-col pt-10 justify-center items-center`}
          >
            <Text style={tw`text-white text-xl`}>Account</Text>
            <Svg
              width="100"
              height="100"
              viewBox="0 0 97 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Circle
                cx="48.5"
                cy="48"
                r="38"
                fill="#F3ECEE"
                stroke="#EAEAEA"
                stroke-width="4"
              />
              <Path
                d="M49 36C47.5166 36 46.0666 36.4399 44.8332 37.264C43.5999 38.0881 42.6386 39.2594 42.0709 40.6299C41.5032 42.0003 41.3547 43.5083 41.6441 44.9632C41.9335 46.418 42.6478 47.7544 43.6967 48.8033C44.7456 49.8522 46.082 50.5665 47.5368 50.8559C48.9917 51.1453 50.4997 50.9968 51.8701 50.4291C53.2406 49.8614 54.4119 48.9001 55.236 47.6668C56.0601 46.4334 56.5 44.9834 56.5 43.5C56.5 41.5109 55.7098 39.6032 54.3033 38.1967C52.8968 36.7902 50.9891 36 49 36Z"
                fill="#029256"
              />
              <Path
                d="M49 27C44.8466 27 40.7865 28.2316 37.333 30.5391C33.8796 32.8466 31.188 36.1264 29.5985 39.9636C28.0091 43.8009 27.5932 48.0233 28.4035 52.0969C29.2138 56.1705 31.2139 59.9123 34.1508 62.8492C37.0877 65.7861 40.8295 67.7862 44.9031 68.5965C48.9767 69.4068 53.1991 68.9909 57.0364 67.4015C60.8736 65.812 64.1534 63.1204 66.4609 59.667C68.7684 56.2135 70 52.1534 70 48C69.9937 42.4324 67.7791 37.0947 63.8422 33.1578C59.9053 29.2209 54.5676 27.0064 49 27ZM60.988 61.389C60.9581 59.4215 60.1565 57.5445 58.7559 56.1624C57.3553 54.7803 55.4677 54.0037 53.5 54H44.5C42.5323 54.0037 40.6448 54.7803 39.2441 56.1624C37.8435 57.5445 37.0419 59.4215 37.012 61.389C34.2919 58.9601 32.3736 55.7623 31.5113 52.219C30.6489 48.6757 30.8832 44.954 32.183 41.5468C33.4828 38.1396 35.7868 35.2075 38.7901 33.1388C41.7933 31.0702 45.354 29.9625 49.0008 29.9625C52.6475 29.9625 56.2082 31.0702 59.2115 33.1388C62.2147 35.2075 64.5187 38.1396 65.8186 41.5468C67.1184 44.954 67.3526 48.6757 66.4903 52.219C65.6279 55.7623 63.7082 58.9601 60.988 61.389Z"
                fill="#029256"
              />
              <Rect
                x="61"
                y="65.5"
                width="23"
                height="23"
                rx="11.5"
                fill="white"
              />
              <Rect
                x="61"
                y="65.5"
                width="23"
                height="23"
                rx="11.5"
                stroke="#EAEAEA"
              />
              <Path
                d="M74 77C74 77.8284 73.3284 78.5 72.5 78.5C71.6716 78.5 71 77.8284 71 77C71 76.1716 71.6716 75.5 72.5 75.5C73.3284 75.5 74 76.1716 74 77ZM70.4573 73.1219C70.6479 72.7408 71.0374 72.5 71.4635 72.5H73.5365C73.9626 72.5 74.3521 72.7408 74.5427 73.1219L74.9818 74H75.5C76.3284 74 77 74.6716 77 75.5V79.25C77 80.0784 76.3284 80.75 75.5 80.75H69.5C68.6716 80.75 68 80.0784 68 79.25V75.5C68 74.6716 68.6716 74 69.5 74H70.0182L70.4573 73.1219ZM74.75 77C74.75 75.7574 73.7426 74.75 72.5 74.75C71.2574 74.75 70.25 75.7574 70.25 77C70.25 78.2426 71.2574 79.25 72.5 79.25C73.7426 79.25 74.75 78.2426 74.75 77Z"
                fill="#03B66B"
              />
            </Svg>
            <Text style={tw`text-white text-xl`}>Rasheed Abdulrauf</Text>
          </View>
        </View>

        <View style={tw`p-4 pt-8`}>
          <Text style={tw`text-gray-400`}>ACCOUNT AND SECURITY</Text>
          <View style={tw`flex flex-col gap-5 pt-5 `}>
            {profiles.map((p) => {
              return (
                <TouchableOpacity
                  style={tw`flex flex-row justify-between items-center`}
                  onPress={() => {
                    p?.comment === p?.comment
                      ? navigations.navigate(p?.comment)
                      : "";
                  }}
                >
                  <View style={tw`flex flex-row gap-7 items-center`}>
                    <View>{p?.logo}</View>
                    <Text>{p?.comment}</Text>
                  </View>
                  <View>{p?.icon}</View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={tw`p-4 pt-8`}>
          <Text style={tw`text-gray-400`}>ACCOUNT AND SECURITY</Text>
          <View style={tw`flex flex-col gap-5 pt-5 `}>
            {profiles.map((p) => {
              return (
                <View style={tw`flex flex-row justify-between items-center`}>
                  <View style={tw`flex flex-row gap-7 items-center`}>
                    <View>{p?.logo}</View>
                    <Text>{p?.comment}</Text>
                  </View>
                  <View>{p?.icon}</View>
                </View>
              );
            })}
          </View>
        </View>
        {/* <View
        style={tw`flex-1 flex flex-col justify-end absolute w-full bottom-0 bg-gray z-999`}
      >
        <Tab />
      </View> */}
        {/* <ImageBackground source={require("../assets/assets/ICONS/")}>
        <Text>Hii</Text>
      </ImageBackground> */}
      </View>
    </Tab>
  );
}
