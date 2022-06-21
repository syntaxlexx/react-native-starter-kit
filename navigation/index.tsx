import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import IntroNavigator from "./IntroNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

import OnboardingContext from "@/onboarding/context";
import onboardingStorage from "@/onboarding/storage";
import AuthContext from "@/auth/context";
import authStorage from "@/auth/storage";
import { UserEntity } from "@/types.project";

// theming
import { NavigationDarkTheme, NavigationDefaultTheme } from "../theme";
import { View } from "react-native";

export default function Navigation({ isThemeDark }: { isThemeDark: boolean }) {
  const [user, setUser] = useState<UserEntity | undefined>();
  const [isOnboard, setIsOnboard] = useState<boolean>(false);
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const initialiseData = async () => {
    const boarded = await onboardingStorage.get();
    if (boarded) setIsOnboard(true);
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await initialiseData();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <OnboardingContext.Provider value={{ isOnboard, setIsOnboard }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer
          linking={LinkingConfiguration}
          theme={isThemeDark ? NavigationDarkTheme : NavigationDefaultTheme}
        >
          <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            {!isOnboard ? (
              <IntroNavigator />
            ) : user ? (
              <AppNavigator user={user} />
            ) : (
              <AuthNavigator />
            )}
          </View>
        </NavigationContainer>
      </AuthContext.Provider>
    </OnboardingContext.Provider>
  );
}
