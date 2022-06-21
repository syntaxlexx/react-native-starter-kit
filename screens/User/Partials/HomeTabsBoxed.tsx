import React from "react";
import ROUTES from "@/navigation/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Box } from "native-base";
import { ThemeColors } from "@/theme";

import { UserEntity } from "@/types.project";
import Settings from "@/constants/Settings";
import navigationBarTheme from "@/navigation/navigationBarTheme";
import useColorScheme from "@/hooks/useColorScheme";

// screens
import Home from "../Home";
import TabOne from "../TabOne";
import TabTwo from "../TabTwo";
import TabThree from "../TabThree";
import TabFour from "../TabFour";
import { AppIcon, AppText } from "@/components";

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={[styles.customButtonContainer]} onPress={onPress}>
    <Box style={[styles.customButton, styles.shadow]}>{children}</Box>
  </TouchableOpacity>
);

function HomeTabsBoxed({ user }: { user: UserEntity }) {
  const BottomTab = createBottomTabNavigator();

  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={ROUTES.USER_HOME}
      screenOptions={{
        tabBarActiveTintColor: ThemeColors[colorScheme].tint,
        tabBarStyle: [
          styles.tabs,
          styles.shadow,
          {
            backgroundColor: ThemeColors[colorScheme].background,
          },
        ],
      }}
    >
      <BottomTab.Screen
        name="ClientHomeTab"
        component={Home}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <Box style={[styles.tabBox]}>
              <AppIcon
                name="home"
                color={color}
                size={25}
                style={[styles.tabIcon]}
              />
              <AppText style={[styles.tabText]}>Home</AppText>
            </Box>
          ),
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
          title: "Find",
          headerStyle: navigationBarTheme.screenOptions.headerStyle,
          headerTitleStyle: navigationBarTheme.screenOptions.headerTitleStyle,
          tabBarIcon: ({ color }) => (
            <Box style={[styles.tabBox]}>
              <AppIcon
                name="magnify"
                color={color}
                size={25}
                style={[styles.tabIcon]}
              />
              <AppText style={[styles.tabText]}>Find</AppText>
            </Box>
          ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name={ROUTES.USER_TAB_TWO}
        component={TabTwo}
        options={{
          title: "Add | Tab Two",
          headerStyle: navigationBarTheme.screenOptions.headerStyle,
          headerTitleStyle: navigationBarTheme.screenOptions.headerTitleStyle,
          tabBarIcon: ({ color }) => (
            <AppIcon name="plus" color={"#fff"} size={35} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name={ROUTES.USER_TAB_THREE}
        component={TabThree}
        options={{
          title: "Tab Three",
          headerStyle: navigationBarTheme.screenOptions.headerStyle,
          headerTitleStyle: navigationBarTheme.screenOptions.headerTitleStyle,
          tabBarIcon: ({ color }) => (
            <Box style={[styles.tabBox]}>
              <AppIcon
                name="account-settings"
                color={color}
                size={25}
                style={[styles.tabIcon]}
              />
              <AppText style={[styles.tabText]}>Profile</AppText>
            </Box>
          ),
          tabBarShowLabel: false,
        }}
      />

      <BottomTab.Screen
        name={ROUTES.USER_TAB_FOUR}
        component={TabFour}
        options={{
          title: "Settings",
          headerStyle: navigationBarTheme.screenOptions.headerStyle,
          headerTitleStyle: navigationBarTheme.screenOptions.headerTitleStyle,
          tabBarIcon: ({ color }) => (
            <Box style={[styles.tabBox]}>
              <AppIcon
                name="cog"
                color={color}
                size={25}
                style={[styles.tabIcon]}
              />
              <AppText style={[styles.tabText]}>Settings</AppText>
            </Box>
          ),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabs: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 15,
    height: 90,
  },
  shadow: {
    shadowColor: ThemeColors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBox: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
  tabIcon: {
    // width: 25,
    // height: 25,
  },
  tabText: {
    fontSize: 12,
  },
  customButtonContainer: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#e32f45",
  },
});

export default HomeTabsBoxed;
