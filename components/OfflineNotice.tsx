import React from "react";
import { StyleSheet, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";

import AppText from "./AppText";
import { ThemeColors } from "@/theme";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text} fontSize="xs">
          No internet connection
        </AppText>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ThemeColors.danger,
    height: 30,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
  },
  text: {
    color: ThemeColors.white,
  },
});

export default OfflineNotice;
