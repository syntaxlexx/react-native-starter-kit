import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import navigationBarTheme from "@/navigation/navigationBarTheme";
import IntroScreen from "@/screens/IntroScreen";

const Stack = createNativeStackNavigator();

const IntroNavigator = () => (
  <Stack.Navigator
    screenOptions={
      (navigationBarTheme.screenOptions,
      {
        headerShown: false,
        statusBarHidden: true,
      })
    }
  >
    <Stack.Screen name="Intro" component={IntroScreen} />
  </Stack.Navigator>
);

export default IntroNavigator;
