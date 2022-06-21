import React, { ReactElement } from "react";
import { Text } from "native-base";

import defaultStyles from "@/constants/Styles";
import useThemeToggler from "@/hooks/useThemeToggler";

interface PropsTypes {
  children: string | number | ReactElement | ReactElement[];
  fontSize?: string;
  fontFamily?: string;
  style?: object;
  color?: string | undefined;
}

function AppText({
  children,
  fontSize = "md",
  fontFamily = "avenir",
  style = {},
  color,
  ...otherProps
}: PropsTypes) {
  const { isThemeDark } = useThemeToggler();

  const cl = color ? color : isThemeDark ? "white" : "black";

  if (fontFamily) defaultStyles.text.fontFamily = fontFamily;

  return (
    <Text
      style={[defaultStyles.text, style]}
      fontSize={fontSize}
      color={cl}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

export default AppText;
