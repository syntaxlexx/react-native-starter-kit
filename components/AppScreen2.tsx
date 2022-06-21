import React, { ReactNode } from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { ThemeColors } from "@/theme";
import useThemeToggler from "@/hooks/useThemeToggler";

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

interface PropsTypes {
  children: ReactNode;
  style?: object;
}

function AppScreen2({ children, style = {} }: PropsTypes) {
  const { isThemeDark } = useThemeToggler();

  return (
    <SafeAreaView
      style={[styles.screen, style, { backgroundColor: ThemeColors.primary }]}
    >
      <StatusBar
        translucent={true}
        style="light"
        backgroundColor={ThemeColors.primary}
      />

      <View
        style={[
          styles.content,
          {
            backgroundColor: isThemeDark
              ? ThemeColors.dark.background
              : ThemeColors.light.background,
          },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default AppScreen2;
