import { DefaultTheme } from "@react-navigation/native";
import { ThemeColors } from "@/theme"

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: ThemeColors.primary,
    // background: Colors.white,
  },
};
