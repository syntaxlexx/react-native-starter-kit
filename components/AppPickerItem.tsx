import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";

interface PropsTypes {
  item: string;
  label: string;
  onPress?: Function;
}

function AppPickerItem({ item, label, onPress }: PropsTypes) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default AppPickerItem;
