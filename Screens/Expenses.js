import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Tab from "../Components/Tab";
import AntDesign from "react-native-vector-icons/AntDesign";
import tw from "twrnc";
import { Wifi } from "../assets/assets/ICONS";

import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function Expenses() {
  const [week, setWeek] = useState(true);
  const [month, setMonth] = useState(false);
  const [year, setYear] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Data");

  const screenWidth = Dimensions.get("window").width;

  const navigation = useNavigation();

  //   Data for Charts
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "",
    backgroundGradientTo: "",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `green`,
    labelColor: (opacity = 1) => `black`,
    style: {
      borderRadius: 16,
    },
  };

  const billpayment = [
    {
      logo: <Wifi />,
      title: "Data Subsciption",
      icom: <AntDesign name="right" size={20} color="green" />,
      content: "AIRTEL 09083537352",
    },
    {
      logo: <Wifi />,
      title: "Airtime Topup",
      icom: <AntDesign name="right" size={20} color="green" />,
      content: "MTN 09083537352",
    },
    {
      logo: <Wifi />,
      title: "Electricity bill payment",
      icom: <AntDesign name="right" size={20} color="green" />,
      content: "9MOBILE 09083537352",
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
        <AntDesign
          name="arrowleft"
          size={25}
          onPress={() => navigation.goBack()}
          style={tw`w-10%`}
        />
        <Text style={[tw`text-2xl w-80%  text-center font-semibold`]}>
          Expenses
        </Text>
        <Text style={tw`w-10%`}></Text>
      </View>
      <View
        style={[
          tw` pt-10 border-b px-10 flex flex-row justify-between`,
          { borderBottomColor: "#DDDDDD" },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            setWeek(true), setMonth(false), setYear(false);
          }}
          style={tw`p-3 w-20 ${week ? `border-b-2 border-b-green-500` : ``}`}
        >
          <Text>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setWeek(false), setMonth(true), setYear(false);
          }}
          style={tw`p-3 ${month ? `border-b-2 border-b-green-500` : ``}`}
        >
          <Text>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setWeek(false), setMonth(false), setYear(true);
          }}
          style={tw`p-3 ${year ? `border-b-2 border-b-green-500` : ``}`}
        >
          <Text>Year</Text>
        </TouchableOpacity>
      </View>
      {/* Component Tab */}
      <View style={tw`p-3`}>
        <View
          style={[
            tw` border-2 flex-row items-center w-35 rounded-lg gap-3 p-2`,
            { borderColor: "gainsboro" },
          ]}
        >
          <Text>Services:</Text>
          <View style={[tw`flex flex-row items-center `]}>
            <RNPickerSelect
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              items={[
                { label: "Data ", value: "Data" },
                { label: "Airtime", value: "Airtime" },
                // Add more items for each option
              ]}
              value={selectedValue}
            />
            <AntDesign name="down" size={15} color="#3E3D75" />
          </View>
        </View>
        <View style={tw`py-10 gap-2`}>
          <Text style={[tw`text-xs font-semibold`, { color: "#909090" }]}>
            You have spent a total of
          </Text>
          <Text style={[tw`text-3xl font-semibold`, { color: "#3E3D75" }]}>
            ₦19,200
          </Text>
          <Text style={[tw`text-xs font-semibold`, { color: "#909090" }]}>
            Week 1 - Week 4 of April,2022
          </Text>
        </View>
        <ScrollView
          horizontal
          // showsHorizontalScrollIndicator={false}
          style={tw`pr-20`}
        >
          <BarChart
            // style={graphStyle}
            data={data}
            // width={screenWidth}
            width={screenWidth}
            height={280}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
        </ScrollView>
        <Text style={tw`pt-10 font-700 text-xs`}>TRANSACTION HISTORY</Text>
        <View style={[tw`p-3 mt-3  `]}>
          <Text style={[tw`text-xs pb-5  font-700`, { color: "#BBBBBB" }]}>
            THURSDAY, 07 APR 2022
          </Text>
          <View style={tw`flex flex-col gap-6`}>
            {billpayment.map((b) => {
              return (
                <View
                  style={[tw`flex flex-row justify-between pb-5  items-center`]}
                >
                  <View style={tw`flex flex-row items-center gap-8`}>
                    <View>{b?.logo}</View>
                    <View style={tw`flex flex-col gap-1`}>
                      <Text style={tw`text-base font-400`}>{b?.title}</Text>
                      <Text style={tw`text-xs font-400`}>{b?.content}</Text>
                    </View>
                  </View>

                  <View>{b?.icom}</View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </Tab>
  );
}
