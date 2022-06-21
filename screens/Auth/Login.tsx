import React from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";

import DefaultStyles from "@/constants/Styles";
import LoginForm from "@/components/Auth/LoginForm";

function Login({ navigation }) {
  return (
    <Box style={styles.container}>
      <LoginForm navigation={navigation} />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DefaultStyles.padding,
    paddingTop: DefaultStyles.paddingTop,
  },
});

export default Login;
