import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";

import defaultStyles from "@/constants/Styles";
import { ComingSoon } from "@/components";

function ContactUs({ navigation }) {
  return (
    <Box style={styles.container}>
      <ComingSoon />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: defaultStyles.padding,
    paddingTop: defaultStyles.paddingTop,
  },
});

export default ContactUs;
