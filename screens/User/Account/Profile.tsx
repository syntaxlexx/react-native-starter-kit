import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";

import defaultStyles from "@/constants/Styles";
import { AppText, ComingSoon } from "@/components";

function Profile({ navigation }) {
  return (
    <Box style={styles.container}>
      <AppText>User Profile</AppText>
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

export default Profile;
