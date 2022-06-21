import React, { ReactElement } from "react";
import { Link } from "native-base";

import AppText from "./AppText";
import { GestureResponderEvent } from "react-native";

interface PropsTypes {
  children: string | number | ReactElement | ReactElement[];
  underline?: boolean;
  onPress:
    | ((event?: GestureResponderEvent | undefined) => any)
    | null
    | undefined;
}

function AppLink({
  children,
  underline = true,
  onPress,
  ...otherProps
}: PropsTypes) {
  return (
    <Link onPress={onPress}>
      <AppText underline={underline} {...otherProps}>
        {children}
      </AppText>
    </Link>
  );
}

export default AppLink;
