import React, { ReactChildren } from "react";
import { Box } from "native-base";
import { TouchableOpacity } from "react-native";

type gradientMatrix = [number, number];

interface PropsTypes {
  children: ReactChildren[];
  startColor: string;
  endColor: string;
  start: gradientMatrix;
  end: gradientMatrix;
  p: string;
  rounded: string;
  onPress: Function;
}

function GradientCard({
  children,
  startColor = "primary.300",
  endColor = "primary.500",
  start = [0, 0],
  end = [1, 0],
  p = "5",
  rounded = "xl",
  onPress,
  ...otherProps
}: PropsTypes) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        w="100%"
        bg={{
          linearGradient: {
            colors: [startColor, endColor],
            start: start,
            end: end,
          },
        }}
        p={p}
        rounded={rounded}
        {...otherProps}
      >
        {children}
      </Box>
    </TouchableOpacity>
  );
}

export default GradientCard;
