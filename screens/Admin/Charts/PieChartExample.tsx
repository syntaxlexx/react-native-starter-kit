import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";

import { PieChart } from "react-native-chart-kit";

import Layout from "@/constants/Layout";
import { AppText } from "@/components";

const chartConfig = {
  // backgroundColor: "#e26a00",
  // backgroundGradientFrom: "#fb8c00",
  // backgroundGradientTo: "#ffa726",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "2",
    strokeWidth: "2",
    stroke: "#ffa726",
  },
};

const chartData = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

function PieChartExample({ navigation }) {
  const { width } = Layout.window;

  return (
    <Box style={styles.container}>
      <AppText color="coolGray.700" _dark={{ color: "coolGray.400" }}>
        Pie Chart Example
      </AppText>

      <PieChart
        // style={graphStyle}
        data={chartData}
        width={width * 0.9} // from react-native
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 50]}
        absolute
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PieChartExample;
