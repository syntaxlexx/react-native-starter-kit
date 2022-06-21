import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import navigationBarTheme from "./navigationBarTheme";

import ROUTES from "./routes";
const Stack = createNativeStackNavigator();
import { UserEntity } from "@/types.project";

import authStorage from "@/auth/storage";

import TabOne from "@/screens/User/TabOne";
import TabTwo from "@/screens/User/TabTwo";
import HomeTabs from "@/screens/User/Partials/HomeTabs";
import HomeTabsBoxed from "@/screens/User/Partials/HomeTabsBoxed";
import ImageDetails from "@/screens/User/ImageDetails";
import Profile from "@/screens/User/Account/Profile";

// Main navigator
const UserNavigator = () => {
  const [user, setUser] = useState<UserEntity | null>(null);

  const loadUser = async () => {
    const us = await authStorage.getUser();
    if (us) setUser(us);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Stack.Navigator screenOptions={navigationBarTheme.screenOptions}>
      <Stack.Screen
        name={ROUTES.USER_HOME}
        component={HomeTabsBoxed} // HomeTabs, HomeTabsBoxed
        user={user}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={ROUTES.USER_TAB_ONE}
        component={TabOne}
        options={{
          headerTitle: "Tab One",
        }}
      />
      <Stack.Screen
        name={ROUTES.USER_TAB_TWO}
        component={TabTwo}
        options={{
          headerTitle: "Tab Two",
        }}
      />
      <Stack.Screen
        name={ROUTES.USER_IMAGE_DETAILS}
        component={ImageDetails}
        options={{
          headerTitle: "Image Details",
          headerShown: false,
          statusBarHidden: true,
        }}
      />
      <Stack.Screen
        name={ROUTES.USER_PROFILE}
        component={Profile}
        options={{
          headerTitle: "User Profile",
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
