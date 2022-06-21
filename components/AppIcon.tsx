import React from "react";
import { Icon } from "native-base";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

interface PropsTypes {
  name: string;
}

function AppIcon({ name, ...otherProps }: PropsTypes) {
  const iconName = name.startsWith("ant-") ? name.replace("ant-", "") : name;

  return (
    <Icon
      name={iconName}
      as={name.startsWith("ant-") ? AntDesign : MaterialCommunityIcons}
      {...otherProps}
    />
  );
}

export default AppIcon;
