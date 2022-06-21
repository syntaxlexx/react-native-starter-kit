import { Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Box } from "react-native-flex-layout";
import AppIcon from "../AppIcon";

interface PropsTypes {
  error: string | null;
  visible: boolean;
}

function ErrorMessage({ error, visible }: PropsTypes) {
  if (!visible || !error) return null;

  return (
    <Text style={styles.error} fontSize="xs">
      <AppIcon
        name="alert-circle-outline"
        style={[styles.error, { fontSize: 11 }]}
      />
      {error}
    </Text>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
