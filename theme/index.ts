import React from "react";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageManager, ColorMode } from "native-base";
const tintColorLight = "#388bb3";
const tintColorDark = "#fff";

export const ThemeColors = {
  light: {
    text: "#242c40",
    background: "#d0d0c0",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#d0d0c0",
    background: "#242c40",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
  primary: "#388bb3",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  medium: "#636969",
  danger: "#ff5252",
  lightBg: "#eee",
};

// native base
import { extendTheme } from "native-base";

export const NativeBaseTheme = extendTheme({
  colors: {
    // generated via https://maketintsandshades.com/
    primary: {
      50: "##d7e8f0",
      100: "#afd1e1",
      200: "#88b9d1",
      300: "#74aeca",
      400: "#4c97bb",
      500: "#388bb3",
      600: "#327da1",
      700: "#27617d",
      800: "#163848",
      900: "#0b1c24",
    },
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: "light",
  },
});

// Define the colorModeManager,
// here we are using react-native-async-storage (https://react-native-async-storage.github.io/async-storage/)
export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem("@color-mode");
      return val === "dark" ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem("@color-mode", value);
    } catch (e) {
      console.log(e);
    }
  },
};

// navigation
export const NavigationDefaultTheme = DefaultTheme;
export const NavigationDarkTheme = DarkTheme;

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
