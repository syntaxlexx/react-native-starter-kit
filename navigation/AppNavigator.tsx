import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import useNotifications from "@/hooks/useNotifications";
import useAuth from "@/auth/useAuth";
import ROUTES from "./routes";

import navigationBarTheme from "./navigationBarTheme";
import UserNavigator from "./UserNavigator";
import AdminNavigator from "./AdminNavigator";

import ContactMessages from "@/screens/ContactMessages";
import UnknownScreen from "@/screens/UnknownScreen";
import AboutScreen from "@/screens/AboutScreen";
import SplashScreen from "@/screens/SplashScreen";
import InviteFriends from "@/screens/InviteFriends";
import Faq from "@/screens/Faq";
import ContactUs from "@/screens/ContactUs";
import MenuScreen from "@/screens/MenuScreen";
import { UserEntity } from "@/types.project";

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const AppNavigator = ({ user }: { user: UserEntity }) => {
  const auth = useAuth();

  const checkIfLoggedIn = async () => {
    const isLoggedIn = await auth.isLoggedIn();
    if (isLoggedIn) return;

    auth.logout();
  };

  useNotifications(
    (notification) => {
      // navigation.navigate("Account");
      // console.log("notification", notification);
    },
    (response) => {
      // console.log("response", response);
      // navigation.navigate("Account");
    }
  );

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <Stack.Navigator screenOptions={navigationBarTheme.screenOptions}>
      <Stack.Screen
        name={ROUTES.SPLASH}
        component={SplashScreen}
        options={{
          headerShown: false,
          statusBarHidden: true,
        }}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={
          ["user", "client"].includes(user.role)
            ? UserNavigator
            : ["admin", "sudo"].includes(user.role)
            ? AdminNavigator
            : UnknownScreen
        }
        options={{
          headerShown: false,
        }}
      />

      <Stack.Group>
        <Stack.Screen name={ROUTES.MENU} component={MenuScreen} />
        <Stack.Screen name={ROUTES.ABOUT} component={AboutScreen} />
        <Stack.Screen
          name={ROUTES.INVITE_FRIENDS}
          component={InviteFriends}
          options={{ headerTitle: "Invite Friends" }}
        />
        <Stack.Screen
          name={ROUTES.FAQ}
          component={Faq}
          options={{ headerTitle: "F.A.Q." }}
        />
        <Stack.Screen
          name={ROUTES.CONTACT_US}
          component={ContactUs}
          options={{ headerTitle: "Contact Us" }}
        />
        <Stack.Screen
          name={ROUTES.CONTACT_MESSAGES}
          component={ContactMessages}
          options={{ title: "Contact Messages" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigator;
