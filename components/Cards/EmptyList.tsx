import React, { ReactChildren, useEffect, useState } from "react";
import { Box, Image } from "native-base";

import AppText from "@/components/AppText";
import TwoColumnCard from "./TwoColumnCard";

interface PropsTypes {
  children: string | ReactChildren[];
  image: string;
  text: string;
}

function EmptyList({
  image = require("@/assets/images/not-found.png"),
  text = "No data found",
  children,
  ...otherProps
}: PropsTypes) {
  return (
    <TwoColumnCard {...otherProps}>
      <Image
        source={image}
        size="lg"
        alt="Image"
        resizeMode={"contain"}
      ></Image>
      <Box w="50%">
        <AppText>{text}</AppText>
        {children}
      </Box>
    </TwoColumnCard>
  );
}

export default EmptyList;
