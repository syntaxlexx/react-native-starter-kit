import React, { ReactChildren } from "react";
import AppIcon from "./AppIcon";

import AppText from "./AppText";
import { GradientCard } from "./Cards";

interface PropsTypes {
  text?: string;
}

function ComingSoon({ text = "Coming Soon" }: PropsTypes) {
  return (
    <GradientCard flexDirection="row" alignItems="center">
      <AppIcon name="information" color="white" mr={4} />
      <AppText color="white">{text}</AppText>
    </GradientCard>
  );
}

export default ComingSoon;
