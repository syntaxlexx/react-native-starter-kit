import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { LogBox, View, Text } from "react-native";
import Settings from "./constants/Settings";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "@/navigation";

// theming
import { NativeBaseProvider } from "native-base";
import useColorScheme from "@/hooks/useColorScheme";
import { NativeBaseTheme, PreferencesContext, ThemeColors } from "./theme";

const nativeBaseConfig = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

// react query
const queryClient = new QueryClient();

// logging
import logger from "@/util/logger";
logger.start();

import Bugsnag from "@bugsnag/expo";
const ErrorBoundary = Bugsnag.getPlugin("react").createErrorBoundary(React);

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = Settings.supportDarkMode ? useColorScheme() : "light";
  const [isThemeDark, setIsThemeDark] = React.useState(colorScheme == "dark");

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
  LogBox.ignoreLogs(["NativeBase: The contrast ratio of"]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider theme={NativeBaseTheme} config={nativeBaseConfig}>
          <PreferencesContext.Provider value={preferences}>
            <QueryClientProvider client={queryClient}>
              {/* avoid white flicker when on dark mode */}
              <View
                style={{
                  flex: 1,
                  backgroundColor: isThemeDark
                    ? ThemeColors.dark.background
                    : ThemeColors.light.background,
                }}
              >
                <Navigation isThemeDark={isThemeDark} />
                <StatusBar
                  style={isThemeDark ? "light" : "dark"}
                  backgroundColor={ThemeColors.primary}
                />
              </View>
            </QueryClientProvider>
          </PreferencesContext.Provider>
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
};

const ErrorView = () => (
  <View>
    <Text>An error occurred while running the app.</Text>
  </View>
);

const onError = (event) => {
  // callback will only run for errors caught by boundary
  console.log("error captured", event);
};

export default () => (
  <ErrorBoundary FallbackComponent={ErrorView} onError={onError}>
    <App />
  </ErrorBoundary>
);
