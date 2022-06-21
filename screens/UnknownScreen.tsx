import React from "react";
import { AppText } from "@/components";
import { StyleSheet, View } from "react-native";

function UnknownScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Oops! Unknown Page</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UnknownScreen;
