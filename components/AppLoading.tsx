import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import useColorScheme from "@/hooks/useColorScheme";

interface PropsTypes {
  visible?: boolean;
  opacity?: number;
}

function AppLoading({ visible = false, opacity = 0.8 }: PropsTypes) {
  if (!visible) return null;
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.overlay,
        {
          backgroundColor: colorScheme == "light" ? "white" : "black",
          opacity: opacity,
        },
      ]}
    >
      <LottieView
        autoPlay
        loop
        source={require("@/assets/animations/spinning-cat.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
});

export default AppLoading;
