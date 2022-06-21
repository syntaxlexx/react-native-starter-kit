import React from "react";
import { PreferencesContext } from "@/theme";

const useThemeToggler = () => {
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  const iconName = isThemeDark ? "white-balance-sunny" : "moon-waxing-crescent";

  return {
    toggleTheme,
    isThemeDark,
    iconName,
  };
};

export default useThemeToggler;
