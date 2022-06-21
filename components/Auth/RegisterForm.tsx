import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Box, Link, HStack, KeyboardAvoidingView, useToast } from "native-base";
import * as Yup from "yup";

import acelordsFunctions from "@/util/acelordsFunctions";
import authApi from "@/api/auth";
import {
  AppForm,
  SubmitButton,
  AppFormField,
  LaravelErrorMessages,
  ErrorMessage,
} from "@/components/Forms";
import { RegisterEntity } from "@/types.project";
import ROUTES from "@/navigation/routes";
import { AppText, AppLink } from "@/components";

const fields = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
  phone: "",
  id_number: "",
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().min(1).label("First Name"),
  last_name: Yup.string().required().min(1).label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  password_confirmation: Yup.string()
    .required()
    .min(4)
    .label("Confirm Password"),
  phone: Yup.string().required().min(10).max(14).label("Phone"),
  id_number: Yup.number().nullable().label("ID Number"),
});

function RegisterForm({ navigation }) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [registrationFailed, setRegistrationFailed] = useState<boolean>(false);
  const [errors, setErrors] = useState<Array<string>>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const toast = useToast();

  const goToLogin = () => {
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2];
    if (prevRoute.name === ROUTES.LOGIN) {
      navigation.pop();
    } else {
      navigation.replace(ROUTES.LOGIN);
    }
  };

  const handleSubmit = async (data: RegisterEntity) => {
    setRegistrationFailed(false);
    setErrors([]);
    setErrorMessage(null);

    const response = await authApi.register(data);
    if (response.ok) {
      toast.show({
        description: "Registration Completed",
      });
      navigation.pop();
      return;
    }
    setRegistrationFailed(true);
    if (response?.data?.errors)
      setErrors(acelordsFunctions.formatErrors(response?.data?.errors));
    else setErrorMessage(response?.data?.message);
  };

  return (
    <Box alignItems="center" style={styles.container}>
      <AppText fontSize="2xl" style={{ marginTop: 10 }}>
        Sign Up for an Account
      </AppText>

      <KeyboardAvoidingView width="100%">
        <AppForm
          initialValues={fields}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <HStack space={1} justifyContent="space-between">
            <Box width="49%">
              <AppFormField
                name="first_name"
                autoCorrect={false}
                placeholder="First Name"
              />
            </Box>

            <Box width="49%">
              <AppFormField
                name="last_name"
                autoCorrect={false}
                placeholder="Last Name"
              />
            </Box>
          </HStack>

          <AppFormField
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            keyboardType="phone-pad"
            placeholder="Phone Number"
            textContentType="telephoneNumber"
          />

          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />

          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            innerIcon="eye-off"
            placeholder="Password"
            textContentType="password"
            secureTextEntry={!showPassword}
            handleInnerIconClicked={() => setShowPassword(!showPassword)}
          />

          <AppFormField
            name="password_confirmation"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            innerIcon="eye-off"
            placeholder="Confirm Password"
            textContentType="password"
            secureTextEntry={!showPassword}
            handleInnerIconClicked={() => setShowPassword(!showPassword)}
          />

          <AppFormField
            name="id_number"
            autoCorrect={false}
            icon="card"
            keyboardType="numeric"
            placeholder="ID Number"
          />

          <LaravelErrorMessages errors={errors} visible={registrationFailed} />

          <ErrorMessage error={errorMessage} visible={!!errorMessage} />

          <SubmitButton title="Register Account" width="100%" />
        </AppForm>
      </KeyboardAvoidingView>

      <HStack space={4} alignItems="flex-end" marginBottom={10} marginTop={5}>
        <AppText>Already have an account?</AppText>
        <AppLink onPress={goToLogin}>Sign in here</AppLink>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  lottie: {
    height: 200,
    marginTop: -35,
  },
});

export default RegisterForm;
