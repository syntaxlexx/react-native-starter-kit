import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Box, HStack } from "native-base";
import * as Yup from "yup";
import authApi from "@/api/auth";
import useAuth from "@/auth/useAuth";

import {
  ErrorMessage,
  AppForm,
  SubmitButton,
  AppFormField,
} from "@/components/Forms";
import ROUTES from "@/navigation/routes";
import { LoginEntity } from "@/types.project";
import { AppText, AppLink } from "@/components";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().min(1).label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginForm({ navigation }) {
  const auth = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async ({ email, password }: LoginEntity) => {
    setLoginFailed(false);
    setErrorMessage(null);

    const result = await authApi.login(email, password);
    if (result.ok) {
      console.log("result", result.data);
      setLoginFailed(false);
      await auth.login(result.data);
      return;
    }
    setLoginFailed(true);
    setErrorMessage("Invalid email and/or password.");
  };

  return (
    <Box alignItems="center">
      <AppText fontSize="2xl" style={{ marginTop: 10, fontWeight: "100" }}>
        Sign In to Your Account
      </AppText>

      <AppForm
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoComplete={"email"}
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Email"
          label="Email"
          keyboardType="email-address"
        />

        <AppFormField
          name="password"
          autoComplete={"password"}
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          innerIcon={showPassword ? "eye-off" : "eye"}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={!showPassword}
          handleInnerIconClicked={() => setShowPassword(!showPassword)}
          submitOnEnter={true}
        />

        <ErrorMessage error={errorMessage} visible={loginFailed} />

        <SubmitButton title="Login" width="100%" />
      </AppForm>

      <HStack space={4} alignItems="flex-end" marginBottom={10} marginTop={5}>
        <AppText>Don't have an account yet?</AppText>
        <AppLink onPress={() => navigation.navigate(ROUTES.REGISTER)}>
          Sign up here
        </AppLink>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  lottie: {
    height: 200,
    marginTop: -15,
  },
});

export default LoginForm;
