import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "@/navigation";
import { View } from "react-native";

// theming
import { Provider as PaperProvider } from "react-native-paper";
import useColorScheme from "@/hooks/useColorScheme";
import { PaperDarkTheme, PaperDefaultTheme, PreferencesContext } from "./theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [isThemeDark, setIsThemeDark] = React.useState(colorScheme === "dark");
  let theme = isThemeDark ? PaperDefaultTheme : PaperDarkTheme;

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

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <View
              style={{
                flex: 1,
                backgroundColor: isThemeDark ? "#000" : "#fff",
              }}
            >
              <StatusBar style={isThemeDark ? "light" : "dark"} />
              <Navigation isThemeDark={isThemeDark} />
            </View>
          </SafeAreaProvider>
        </PaperProvider>
      </PreferencesContext.Provider>
    );
  }
}
