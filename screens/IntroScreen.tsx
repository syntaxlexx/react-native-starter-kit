import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import Settings from "@/constants/Settings";
import useOnboarding from "@/onboarding/useOnboarding";
import { AppIcon, AppText } from "@/components";

const slides = [
  {
    key: 1,
    title: Settings.appName,
    text: "Cute Pets Collection",
    image: require("@/assets/images/pet-2.jpg"),
  },
  {
    key: 2,
    title: "Puffy",
    text: "Aren't I cute?",
    image: require("@/assets/images/pet-3.jpg"),
  },
  {
    key: 3,
    title: "Knuckles",
    text: "Hey there, need a friend?",
    image: require("@/assets/images/pet-1.jpg"),
  },
];

function IntroScreen({ navigation }) {
  const onboardingInfo = useOnboarding();

  const renderItems = ({ item }) => {
    return (
      <ImageBackground style={styles.slide} source={item.image}>
        <View style={styles.content}>
          <AppText
            style={styles.title}
            fontSize="5xl"
            fontFamily="playfair-extra-bold-italic"
          >
            {item.title}
          </AppText>

          <View style={styles.textContainer}>
            <AppText style={styles.text} fontSize="xl" fontFamily="playfair-italic">
              {item.text}
            </AppText>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AppIcon
          name="chevron-right"
          color="rgba(255, 255, 255, .9)"
          size={34}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AppIcon name="check" color="rgba(255, 255, 255, .9)" size={38} />
      </View>
    );
  };

  const handleDone = async () => {
    await onboardingInfo.store();
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={renderItems}
        data={slides}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        onDone={handleDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "15%",
  },
  slide: {
    flex: 1,
    resizeMode: "cover",
    position: "relative",
  },
  title: {
    color: "#111",
  },
  textContainer: {},
  text: {
    color: "#1e1e1e",
    marginTop: 10,
    textAlign: "center",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
});

export default IntroScreen;
