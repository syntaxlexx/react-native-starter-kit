import React from "react";
import ROUTES from "@/navigation/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { UserEntity } from "@/types.project";
import Settings from "@/constants/Settings";
import navigationBarTheme from "@/navigation/navigationBarTheme";
import { TouchableOpacity } from "react-native";
import { Avatar } from "native-base";
import useColorScheme from "@/hooks/useColorScheme";

// screens
import Home from "../Home";
import TabOne from "../TabOne";
import TabTwo from "../TabTwo";
import { ThemeColors } from "@/theme";
import { AppIcon } from "@/components";

function HomeTabs({ user }: { user: UserEntity }) {
  const BottomTab = createBottomTabNavigator();

  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={ROUTES.USER_HOME}
      screenOptions={{
        tabBarActiveTintColor: ThemeColors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="ClientHomeTab"
        component={Home}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => <AppIcon name="home" color={color} />,
          tabBarShowLabel: false,
          headerShown: true,
          headerTitle: `${Settings.appName}`,
          headerTitleStyle: [
            navigationBarTheme.screenOptions.headerTitleStyle,
            {
              fontFamily: "playfair-extra-bold-italic",
              fontSize: 30,
            },
          ],
          headerStyle: navigationBarTheme.screenOptions.headerStyle,
          headerRight: () => (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.ABOUT)}
              >
                <AppIcon
                  name="information-outline"
                  color="white"
                  size="xl"
                  mr={5}
                />
              </TouchableOpacity>
              {user && (
                <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.MENU)}
                >
                  <Avatar
                    bg="primary.500"
                    size="sm"
                    source={{
                      uri: user.avatar,
                    }}
                  ></Avatar>
                </TouchableOpacity>
              )}
            </>
          ),
        })}
      />
      <BottomTab.Screen
        name={ROUTES.USER_TAB_ONE}
        component={TabOne}
        options={{
          title: "Tab One",
          headerStyle: navigationBarTheme.screenOptions.headerStyle,
          headerTitleStyle: navigationBarTheme.screenOptions.headerTitleStyle,
          tabBarIcon: ({ color }) => <AppIcon name="chat" color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name={ROUTES.USER_TAB_TWO}
        component={TabTwo}
        options={{
          title: "Tab Two",
          headerStyle: navigationBarTheme.screenOptions.headerStyle,
          headerTitleStyle: navigationBarTheme.screenOptions.headerTitleStyle,
          tabBarIcon: ({ color }) => (
            <AppIcon name="account-settings" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default HomeTabs;
