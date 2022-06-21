import React from "react";
import { StyleSheet, View } from "react-native";

import DefaultStyles from "@/constants/Styles";
import RegisterForm from "@/components/Auth/RegisterForm";

function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <RegisterForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DefaultStyles.padding,
    paddingTop: DefaultStyles.paddingTop,
  },
});

export default Register;
