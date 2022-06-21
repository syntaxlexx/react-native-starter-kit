import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";

import { ProgressChart } from "react-native-chart-kit";

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
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8],
};

function ProgressRingChartExample({ navigation }) {
  const { width } = Layout.window;

  return (
    <Box style={styles.container}>
      <AppText color="coolGray.700" _dark={{ color: "coolGray.400" }}>
        Progress Ring Chart Example
      </AppText>

      <ProgressChart
        data={chartData}
        width={width * 0.9} // from react-native
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProgressRingChartExample;
