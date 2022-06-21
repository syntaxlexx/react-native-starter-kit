import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "native-base";

interface PropsTypes {
  title: string;
  onPress: Function;
}

function AppButton({ title, onPress, ...otherProps }: PropsTypes) {
  return (
    <Button onPress={onPress} style={styles.button} {...otherProps}>
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
});

export default AppButton;
