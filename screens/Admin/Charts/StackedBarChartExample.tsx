import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";

import { StackedBarChart } from "react-native-chart-kit";

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

const chartData = {
  labels: ["Test1", "Test2"],
  legend: ["L1", "L2", "L3"],
  data: [
    [60, 60, 60],
    [30, 30, 60],
  ],
  barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
};

function StackedBarChartExample({ navigation }) {
  const { width } = Layout.window;

  return (
    <Box style={styles.container}>
      <AppText color="coolGray.700" _dark={{ color: "coolGray.400" }}>
        Stacked Bar Chart Example
      </AppText>

      <StackedBarChart
        // style={graphStyle}
        data={chartData}
        width={width * 0.9} // from react-native
        height={220}
        chartConfig={chartConfig}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default StackedBarChartExample;
