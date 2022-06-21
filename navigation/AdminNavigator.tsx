import React, { useEffect, useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import authStorage from "@/auth/storage";
import Settings from "@/constants/Settings";
import navigationBarTheme from "./navigationBarTheme";
// import AdminDrawer from "@/screens/Admin/Drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

import Home from "@/screens/Admin/Home";
import ROUTES from "./routes";
import { UserEntity } from "@/types.project";
import { TouchableOpacity } from "react-native";
import { AppIcon } from "@/components";
import Profile from "@/screens/Admin/Account/Profile";

type DrawerProps = {
  user: UserEntity | null;
  state: any;
  navigation: any;
};

// function CustomDrawerContent(props: DrawerProps) {
//   return (
//     <DrawerContentScrollView {...props} safeArea>
//       {/* <AdminDrawer props={props} /> */}
//     </DrawerContentScrollView>
//   );
// }

const AdminNavigator = () => {
  const [user, setUser] = useState<UserEntity | null>();

  const loadUser = async () => {
    const us = await authStorage.getUser();
    if (us) setUser(us);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={navigationBarTheme.screenOptions}
      initialRouteName="AdminHome"
      // drawerContent={(props) => <CustomDrawerContent user={user} {...props} />}
    >
      <Stack.Screen
        name="AdminHome"
        component={Home}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: `Admin Home | ${Settings.appName}`,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.MENU)}>
              <AppIcon name="account-circle-outline" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name={ROUTES.ADMIN_PROFILE}
        component={Profile}
        options={{
          headerTitle: "Admin Profile",
        }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
