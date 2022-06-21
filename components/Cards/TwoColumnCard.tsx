import React, { ReactChildren } from "react";
import { HStack } from "native-base";

interface PropsTypes {
  children: ReactChildren[];
}

function TwoColumnCard({ children, ...otherProps }: PropsTypes) {
  return (
    <HStack
      borderWidth={1}
      borderColor="coolGray.300"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="lg"
      p="5"
      {...otherProps}
    >
      {children}
    </HStack>
  );
}

export default TwoColumnCard;
