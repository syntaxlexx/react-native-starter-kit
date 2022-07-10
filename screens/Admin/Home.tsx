import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box, ScrollView, Spacer } from "native-base";

import defaultStyles from "@/constants/Styles";

// import LineChartExample from "./Charts/LineChartExample";
// import ProgressRingChartExample from "./Charts/ProgressRingChartExample";
// import BarChartExample from "./Charts/BarChartExample";
// import StackedBarChartExample from "./Charts/StackedBarChartExample";
// import PieChartExample from "./Charts/PieChartExample";
// import ContributionGraphExample from "./Charts/ContributionGraphExample";
import { AppButton, AppScreen2, AppText } from "@/components";
import useAuth from "@/auth/useAuth";

function Home({ navigation }) {
  const { logout } = useAuth();
  return (
    <AppScreen2>
      <ScrollView style={styles.container}>
        <AppText color="muted.500" fontSize="xl">
          Welcome Admin
        </AppText>
        <AppButton title="Logout" onPress={logout} />
        {/* 
      <Spacer h={5} />

      <LineChartExample navigation={navigation} />

      <Spacer h={25} />

      <ProgressRingChartExample navigation={navigation} />

      <Spacer h={25} />

      <BarChartExample navigation={navigation} />

      <Spacer h={25} />

      <StackedBarChartExample navigation={navigation} />

      <Spacer h={25} />

      <PieChartExample navigation={navigation} />

      <Spacer h={25} />

      <ContributionGraphExample navigation={navigation} /> */}

        <Spacer h={50} />
      </ScrollView>
    </AppScreen2>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: defaultStyles.padding,
    paddingTop: defaultStyles.paddingTop,
  },
});

export default Home;
