import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { useState, useRef } from "react";
import BottomSheet from "react-native-simple-bottom-sheet";
import tw from "twrnc";
import {
  Cable,
  Clinch,
  Data,
  Lamp,
  Mobile,
  Notification,
  Wifi,
} from "../assets/assets/ICONS";
import Tab from "../Components/Tab";
import Svg, { Path, Circle } from "react-native-svg";
import AntDesign from "react-native-vector-icons/AntDesign";
import OverViewAnalytics from "../Components/OverViewAnalytics";
import { useNavigation } from "@react-navigation/native";
import BottomSheetSample from "../Components/BottomSheetSample";
import FilteringDashb from "../Components/FilteringDashb";
import AirtimePopUpDash from "../Components/AirtimePopUpDash";
export default function Dash() {
  // setting screenwidth for the both android and ios
  const screenWidth = Dimensions.get("window").width;

  const [showBalance, setShowBalance] = useState(true);

  const [filter, setFilter] = useState(false);
  const [AirtimePopUp, setAirtimeTopUp] = useState(false);
  const navigation = useNavigation();

  const frequentlyUsed = [
    {
      icon: <Mobile />,
      name: "Buy Airtime",
    },
    {
      icon: <Wifi />,
      name: "Buy Data",
    },
    {
      icon: <Lamp />,
      name: "Buy Electricity",
    },
    {
      icon: <Cable width="100%" height="100%" />,
      name: "Cable",
    },
  ];

  const Transactions = [
    {
      title: "Airtime Topup",
      number: "09127805458",
      icon: <Mobile />,
      amount: "₦500.00",
    },
    {
      title: "Cable Tv",
      number: "09127805458",
      icon: <Cable width="100%" height="100%" />,
      amount: "₦1500.00",
    },
    {
      title: "Cable Tv",
      number: "09127805458",
      icon: <Cable width="100%" height="100%" />,
      amount: "₦1500.00",
    },
    {
      title: "Cable Tv",
      number: "09127805458",
      icon: <Cable width="100%" height="100%" />,
      amount: "₦1500.00",
    },
    {
      title: "Cable Tv",
      number: "09127805458",
      icon: <Cable width="100%" height="100%" />,
      amount: "₦1500.00",
    },
  ];
  return (
    <View style={tw`flex-1 p-3`}>
      {/* <StatusBar backgroundColor="red" barStyle="light-content" /> */}

      <Tab>
        {/* <BottomSheet ref={(ref) => (panelRef.current = ref)}>
        <Text style={{ paddingVertical: 20 }}>hii</Text>
      </BottomSheet> */}
        <View style={tw`flex flex-row justify-between pt-5`}>
          <View style={tw`flex flex-col gap-2`}>
            <Text style={[tw`text-2xl`, { color: "#3E3D75" }]}>
              Good Afternoon,Rash
            </Text>
            <Text style={{ color: "#3E3D75" }}>
              what would you like to do today?
            </Text>
          </View>
          <TouchableOpacity
            style={{ width: 40, height: 40 }}
            onPress={() => navigation.navigate("Notification")}
          >
            <Notification width="100%" height="100%" />
          </TouchableOpacity>
        </View>

        <View
          style={tw`flex flex-row justify-between bg-green-600 p-4 rounded-xl mt-8`}
        >
          <View style={tw`flex flex-col gap-8`}>
            <Text style={tw`font-400 text-base text-white`}>
              UBALANCE &nbsp;
              <Svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 8C14 11.3138 11.3138 14 8 14C4.68616 14 2 11.3138 2 8C2 4.68625 4.68616 2 8 2C11.3138 2 14 4.68625 14 8ZM6.70239 6.65747H8.82398V11.1769C8.82398 11.6144 8.46933 11.969 8.03186 11.969C7.59439 11.969 7.23975 11.6144 7.23975 11.1769V8.06226H6.70239C6.31447 8.06226 6 7.74778 6 7.35986C6 6.97194 6.31447 6.65747 6.70239 6.65747ZM7.00977 4.93247C7.00977 4.80778 7.03192 4.69149 7.07587 4.58359C7.12345 4.47236 7.18773 4.37629 7.26909 4.29539C7.35044 4.21449 7.44524 4.15048 7.55383 4.10326C7.60323 4.0824 7.65408 4.06615 7.70674 4.0545C7.77357 4.03987 7.84294 4.03247 7.91485 4.03247C8.03688 4.03247 8.15202 4.05604 8.26061 4.10326C8.29003 4.11599 8.31836 4.12998 8.3456 4.14515C8.41933 4.18623 8.4858 4.23634 8.54536 4.29539C8.62671 4.37629 8.691 4.47236 8.73858 4.58359C8.76328 4.63984 8.7818 4.69835 8.79342 4.75912C8.80432 4.815 8.80977 4.87279 8.80977 4.93247C8.80977 4.99965 8.80287 5.06492 8.78906 5.12822C8.77744 5.18239 8.76037 5.23512 8.73858 5.2864C8.691 5.3943 8.62671 5.48865 8.54536 5.56955C8.50359 5.61099 8.45856 5.64801 8.40989 5.6806C8.3634 5.71157 8.31364 5.73866 8.26061 5.76168C8.15202 5.80891 8.03688 5.83247 7.91485 5.83247C7.85129 5.83247 7.78991 5.82678 7.73071 5.81532C7.66933 5.80358 7.61049 5.7857 7.55383 5.76168C7.44524 5.71446 7.35044 5.65045 7.26909 5.56955C7.18773 5.48865 7.12345 5.3943 7.07587 5.2864C7.03192 5.17517 7.00977 5.05716 7.00977 4.93247Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </Svg>
            </Text>
            <Text style={tw`text-2xl text-white`}>
              {showBalance ? "****" : "₦1,000"}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            {showBalance ? (
              <Svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M8.28163 8C8.28163 8.69619 8.55819 9.36387 9.05047 9.85616C9.54276 10.3484 10.2104 10.625 10.9066 10.625C11.6028 10.625 12.2705 10.3484 12.7628 9.85616C13.2551 9.36387 13.5316 8.69619 13.5316 8C13.5316 7.30381 13.2551 6.63613 12.7628 6.14385C12.2705 5.65156 11.6028 5.375 10.9066 5.375C10.2104 5.375 9.54276 5.65156 9.05047 6.14385C8.55819 6.63613 8.28163 7.30381 8.28163 8ZM21.0832 7.39531C18.8613 2.71484 15.5027 0.359375 11.0004 0.359375C6.49569 0.359375 3.13944 2.71484 0.917567 7.39766C0.828447 7.58637 0.782227 7.79248 0.782227 8.00117C0.782227 8.20987 0.828447 8.41598 0.917567 8.60469C3.13944 13.2852 6.49804 15.6406 11.0004 15.6406C15.5051 15.6406 18.8613 13.2852 21.0832 8.60234C21.2637 8.22266 21.2637 7.78203 21.0832 7.39531ZM10.9066 12.125C8.6285 12.125 6.78163 10.2781 6.78163 8C6.78163 5.72188 8.6285 3.875 10.9066 3.875C13.1848 3.875 15.0316 5.72188 15.0316 8C15.0316 10.2781 13.1848 12.125 10.9066 12.125Z"
                  fill="white"
                />
              </Svg>
            ) : (
              <Svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M11.9066 14.6251C12.6028 14.6251 13.2705 14.3485 13.7628 13.8562C14.2551 13.3639 14.5316 12.6963 14.5316 12.0001C14.5316 11.9232 14.5281 11.847 14.5216 11.7718L11.6783 14.615C11.7536 14.6216 11.8295 14.6251 11.9066 14.6251ZM20.5954 3.88038L19.5941 2.88007C19.559 2.84493 19.5113 2.8252 19.4616 2.8252C19.4119 2.8252 19.3642 2.84493 19.3291 2.88007L16.7669 5.44296C15.3534 4.72062 13.7646 4.35944 12.0004 4.35944C7.49569 4.35944 4.13475 6.70554 1.91757 11.3977C1.82845 11.5864 1.78223 11.7925 1.78223 12.0012C1.78223 12.2099 1.82845 12.416 1.91757 12.6048C2.8035 14.4708 3.8703 15.9666 5.11796 17.0919L2.6385 19.5704C2.60337 19.6055 2.58363 19.6532 2.58363 19.7029C2.58363 19.7526 2.60337 19.8003 2.6385 19.8355L3.63905 20.836C3.67421 20.8711 3.72188 20.8909 3.77159 20.8909C3.8213 20.8909 3.86897 20.8711 3.90413 20.836L20.5954 4.14569C20.6128 4.12828 20.6266 4.1076 20.6361 4.08484C20.6455 4.06208 20.6504 4.03768 20.6504 4.01304C20.6504 3.9884 20.6455 3.964 20.6361 3.94124C20.6266 3.91847 20.6128 3.8978 20.5954 3.88038ZM7.78163 12.0001C7.78156 11.2876 7.96605 10.5872 8.3171 9.96723C8.66816 9.34723 9.17381 8.82873 9.78482 8.46225C10.3958 8.09576 11.0913 7.89378 11.8036 7.87598C12.5159 7.85818 13.2206 8.02518 13.8491 8.36069L12.7096 9.50022C12.25 9.35307 11.7588 9.33535 11.2898 9.449C10.8209 9.56265 10.3923 9.80329 10.0511 10.1445C9.70985 10.4857 9.46922 10.9143 9.35556 11.3833C9.24191 11.8523 9.25963 12.3435 9.40679 12.803L8.26725 13.9426C7.94747 13.3451 7.78063 12.6777 7.78163 12.0001Z"
                  fill="white"
                />
                <Path
                  d="M22.0826 11.3953C21.2576 9.65779 20.2756 8.24099 19.1367 7.1449L15.7584 10.5234C16.0432 11.2678 16.1063 12.0788 15.9402 12.8583C15.774 13.6378 15.3857 14.3525 14.8221 14.9161C14.2585 15.4797 13.5438 15.868 12.7643 16.0341C11.9848 16.2003 11.1738 16.1372 10.4294 15.8524L7.56396 18.7179C8.89334 19.333 10.3719 19.6406 11.9997 19.6406C16.5044 19.6406 19.8654 17.2945 22.0826 12.6023C22.1717 12.4136 22.2179 12.2075 22.2179 11.9988C22.2179 11.7901 22.1717 11.584 22.0826 11.3953Z"
                  fill="white"
                />
              </Svg>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={[
            tw`mt-8 p-4 bg-white-500 border-2 rounded-xl `,
            { borderColor: "gainsboro" },
          ]}
        >
          <View style={tw`flex flex-row justify-between`}>
            <Text style={tw`text-base font-500`}>OVERVIEW</Text>
            <TouchableOpacity
              style={{ width: 40, height: 40 }}
              onPress={() => setFilter(!filter)}
            >
              <Clinch width="100%" height="100%" />
            </TouchableOpacity>
          </View>

          <View style={tw`flex flex-row justify-between pt-5`}>
            <View style={tw`flex flex-col gap-1`}>
              <Text style={[tw`text-sm`, { color: "gray" }]}>Expenses</Text>
              <Text style={[tw`text-3xl font-500`, { color: "#3E3D75" }]}>
                ₦190,800
              </Text>
              <Text style={[tw`text-sm`, { color: "gray" }]}>JAN-APR 2022</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Expenses")}>
              <Text style={tw`text-green-500 text-xs font-600`}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw``}>
            <OverViewAnalytics />
          </View>
        </View>
        <Text style={[tw`py-6 text-base font-500`, { color: "#333333" }]}>
          FREQUENTLY USE
        </Text>

        {/* <View style={tw`flex flex-row`}>
        <FlatList
          data={frequentlyUsed}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={tw`flex flex-col`}>
              <View>{item.icon}</View>
              <Text>{item.name}</Text>
            </View>
          )}
          style={{ height: 300 }} // Set the height as per your requirement
        />
      </View> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={tw`flex flex-row justify-between overflow-hidden overflow-scroll gap-6`}
          >
            {frequentlyUsed.map((f) => {
              return (
                <TouchableOpacity
                  onPress={() => setAirtimeTopUp(true)}
                  style={[
                    tw`flex flex-col items-center gap-4 p-3 rounded-xl `,
                    { backgroundColor: "#03B66B1A" },
                  ]}
                >
                  <View style={{ width: 30, height: 30 }}>{f?.icon}</View>
                  <Text>{f?.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* Transaction Table */}
        <View
          style={[
            tw`my-7 p-4 rounded-xl border-2`,
            { borderColor: "gainsboro" },
          ]}
        >
          <View style={tw`flex flex-row justify-between`}>
            <Text style={tw`text-base font-600`}>RECENT TRANSACTIONS</Text>
            <TouchableOpacity>
              <Text style={[tw`text-green-600`]}>See more</Text>
            </TouchableOpacity>
          </View>
          <Text style={[tw`py-5 `, { color: "#BBBBBB" }]}>Today</Text>

          <View style={tw`flex flex-col gap-6`}>
            {Transactions.map((t) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("TransactionDetails")}
                  style={tw`flex flex-row justify-between `}
                >
                  <View style={tw`flex flex-row items-center gap-2`}>
                    <View style={{ width: 30, height: 30 }}>{t?.icon}</View>
                    <View style={tw`flex flex-col gap-1`}>
                      <Text>{t?.title}</Text>
                      <Text>{t?.number}</Text>
                    </View>
                  </View>
                  <Text style={[tw`font-600 text-sm`, { color: "#3E3D75" }]}>
                    {t?.amount}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Tab>
      {AirtimePopUp && <AirtimePopUpDash closeAirtimePop={setAirtimeTopUp} />}
      {filter && <FilteringDashb />}
    </View>
  );
}
{
}
