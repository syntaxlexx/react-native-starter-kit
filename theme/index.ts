import React from "react";
import {
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

import {
  MD3DarkTheme,
  MD3LightTheme,
} from "react-native-paper";

import merge from "deepmerge";

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

export const PaperDarkTheme = theme;
export const PaperDefaultTheme = MD3DarkTheme;

export const NavigationDefaultTheme = DefaultTheme
export const NavigationDarkTheme = DarkTheme;

export const PreferencesContext = React.createContext({
  toggleTheme: () => { },
  isThemeDark: false,
});
