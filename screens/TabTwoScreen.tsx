import React from "react";
import { StyleSheet } from "react-native";
import { Button, Switch, Text } from "react-native-paper";
import { theme, PreferencesContext } from "@/theme/index";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text as DText, View } from "../components/Themed";

export default function TabTwoScreen() {
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />

      <Text variant="displayMedium">Headline Large</Text>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>

      <Switch
        onChange={() => toggleTheme()}
        style={[{ backgroundColor: theme.colors.accent }]}
        color={"red"}
        value={isThemeDark}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
