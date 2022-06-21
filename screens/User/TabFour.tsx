import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";

import defaultStyles from "@/constants/Styles";
import { AppText } from "@/components";

function TabFour({ navigation }) {
  return (
    <Box style={styles.container}>
      <AppText>Tab Four</AppText>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: defaultStyles.padding,
    paddingTop: defaultStyles.paddingTop,
  },
});

export default TabFour;
