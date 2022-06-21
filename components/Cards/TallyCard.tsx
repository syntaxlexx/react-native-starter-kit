import React, { useEffect, useState } from "react";
import { Box } from "native-base";

import AppText from "@/components/AppText";

type gradientMatrix = [number, number];

interface PropsTypes {
  tally: number | undefined;
  tallySize: string | undefined;
  description: string | undefined;
  gradient: string | undefined;
  color: string | undefined;
  start: gradientMatrix;
  end: gradientMatrix;
}

class TallyCard extends React.PureComponent<PropsTypes> {
  render() {
    const {
      tally = 0,
      tallySize = "5xl",
      description = "tally",
      gradient = "primary",
      color = "warmGray.50",
      start = [0, 0],
      end = [1, 0],
    } = this.props;

    return (
      <Box
        w="100%"
        bg={{
          linearGradient: {
            colors: [`${gradient}.300`, `${gradient}.500`],
            start: start,
            end: end,
          },
        }}
        _text={{
          textAlign: "center",
          color: { color },
        }}
        p="5"
        rounded="xl"
        justifyContent={"center"}
        alignItems="center"
      >
        <AppText
          fontSize={tallySize}
          fontWeight="medium"
          color={color}
          fontFamily="avenir"
        >
          {tally}
        </AppText>
        <AppText color={color}>{description}</AppText>
      </Box>
    );
  }
}

export default TallyCard;
