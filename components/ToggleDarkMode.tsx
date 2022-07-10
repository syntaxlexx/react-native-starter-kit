import React, { useEffect } from "react";
import { useColorMode } from "native-base";
import { TouchableOpacity } from "react-native";
import useColorScheme from "@/hooks/useColorScheme";

import useThemeToggler from "@/hooks/useThemeToggler";
import AppIcon from "./AppIcon";
import Settings from "@/constants/Settings";

function ToggleDarkMode() {
  const { isThemeDark, toggleTheme, iconName } = useThemeToggler();
  const { toggleColorMode } = useColorMode();
  const colorScheme = useColorScheme();
  const isDarkModeSupported = Settings.supportDarkMode;

  const handleToggleTheme = () => {
    if (isDarkModeSupported) {
      toggleTheme();
      toggleColorMode();
    }
  };

  useEffect(() => {
    const isCurrentColorSchemeDark = colorScheme == "dark";

    // if current colorscheme is light, and app is in dark mode, toggle to light
    // if current colorscheme is dark, and app is in light mode, toggle to dark

    if (!isCurrentColorSchemeDark && isThemeDark) {
      toggleTheme();
    } else if (isCurrentColorSchemeDark && !isThemeDark) {
      toggleColorMode();
    }
  }, [colorScheme]);

  return (
    <TouchableOpacity onPress={handleToggleTheme}>
      <AppIcon
        name={iconName}
        size="lg"
        style={{
          color: "#fff",
        }}
      />
    </TouchableOpacity>
  );
}

export default ToggleDarkMode;
