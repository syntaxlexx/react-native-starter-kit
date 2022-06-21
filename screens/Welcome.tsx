import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MotiImage, MotiView } from "moti";
import { Box } from "native-base";

import defaultStyles from "@/constants/Styles";
import ROUTES from "@/navigation/routes";
import Layout from "@/constants/Layout";
import Settings from "@/constants/Settings";
import acelordsFunctions from "@/util/acelordsFunctions";
import useOnboarding from "@/onboarding/useOnboarding";
import useThemeToggler from "@/hooks/useThemeToggler";
import Constants from "expo-constants";
import { AppButton, AppIcon, AppText } from "@/components";

function Welcome({ navigation }) {
  const onboardingInfo = useOnboarding();
  const { width, height } = Layout.window;

  const [image, setImage] = useState(require("@/assets/images/pet-1.jpg"));
  const [count, setCount] = useState(0);
  const images = [
    require("@/assets/images/pet-1.jpg"),
    require("@/assets/images/pet-2.jpg"),
    require("@/assets/images/pet-3.jpg"),
  ];

  const swapImage = () => {
    if (count == 3)
      setImage(images[acelordsFunctions.getRandomInt(0, images.length - 1)]);
    else setCount(count + 1);
  };

  const resetApp = async () => {
    await onboardingInfo.reset();
  };

  const { isThemeDark, toggleTheme, iconName } = useThemeToggler();

  return (
    <Box style={styles.container}>
      <MotiImage style={styles.image} source={image} />

      <MotiView
        style={[
          styles.overlay,
          {
            height: height * 2,
            width: width * 1.5,
          },
        ]}
        from={{
          opacity: 0,
          translateX: 0,
          rotateZ: "0deg",
        }}
        animate={{
          opacity: [
            0,
            {
              value: 1,
              duration: 2000,
            },
          ],
          translateX: [
            width * -0.5,
            {
              value: width * 0.3,
              delay: 1000,
            },
            {
              value: 40,
              delay: 100,
            },
          ],
          rotateZ: [
            "0deg",
            {
              value: "16deg",
              delay: 1500,
            },
          ],
        }}
        transition={{ type: "timing" }}
      />

      <Box style={styles.content}>
        <TouchableOpacity style={styles.changeThemeBtn} onPress={toggleTheme}>
          <AppIcon
            name={iconName}
            size="lg"
            style={{
              color: "#fff",
            }}
          />
        </TouchableOpacity>

        <Box position="relative" h="100%">
          <Box alignItems="center" mt="20%">
            <AppText
              fontSize="5xl"
              color="white"
              fontFamily="playfair-extra-bold-italic"
            >
              {Settings.appName}
            </AppText>
          </Box>
          <Box position="absolute" bottom="20" left="0" right="0">
            <AppButton
              title="Login"
              onPress={() => navigation.navigate(ROUTES.LOGIN)}
            />
            <AppButton
              title="Register"
              colorScheme="secondary"
              onPress={() => navigation.navigate(ROUTES.REGISTER)}
            />
            <AppButton
              title="View App Intro Screen (dev mode only)"
              width="100%"
              colorScheme="danger"
              onPress={() => resetApp()}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  overlay: {
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  content: {
    paddingHorizontal: defaultStyles.padding,
    paddingTop: defaultStyles.paddingTop,
    zIndex: 2,
  },
  changeThemeBtn: {
    position: "absolute",
    right: 20,
    top: Constants.statusBarHeight + 20,
  },
});

export default Welcome;
