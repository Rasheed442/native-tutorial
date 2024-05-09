import { View, Text } from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import tw from "twrnc";
export default function OverViewAnalytics() {
  const chartConfig = {
    color: (opacity = 1) => `green`,
  };
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "#26D4DF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#0D58C7",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "#03B66B",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#005934",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "#3E3D75",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <View>
      <View style={tw``}>
        <PieChart
          data={data}
          width={340}
          height={210}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
        />
      </View>
    </View>
  );
}
