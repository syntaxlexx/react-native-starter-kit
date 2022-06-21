import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";

import { ContributionGraph } from "react-native-chart-kit";

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
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 },
];

function ContributionGraphExample({ navigation }) {
  const { width } = Layout.window;

  return (
    <Box style={styles.container}>
      <AppText color="coolGray.700" _dark={{ color: "coolGray.400" }}>
        Contribution Graph Example
      </AppText>

      <ContributionGraph
        values={chartData}
        endDate={new Date("2017-04-01")}
        numDays={105}
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

export default ContributionGraphExample;
