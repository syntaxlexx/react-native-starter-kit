import type { Animated, StyleProp, TextStyle, ViewStyle } from "react-native";
import { ThemeColors } from "@/theme"
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const screenOptions = <NativeStackNavigationOptions>{
  headerStyle: {
    backgroundColor: ThemeColors.primary,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "normal",
    color: "#fff",
  },
};

export default {
  screenOptions,
};
