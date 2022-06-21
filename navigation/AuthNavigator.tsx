import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ROUTES from "./routes";
const Stack = createNativeStackNavigator();

import WelcomeScreen from "@/screens/Welcome";
import LoginScreen from "@/screens/Auth/Login";
import RegisterScreen from "@/screens/Auth/Register";
import navigationBarTheme from "./navigationBarTheme";
import SplashScreen from "@/screens/SplashScreen";

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={navigationBarTheme.screenOptions}>
    <Stack.Screen
      name={ROUTES.WELCOME}
      component={WelcomeScreen}
      options={{
        headerShown: false,
        // statusBarHidden: true,
      }}
    />
    <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
    <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
