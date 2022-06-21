import { Center } from "native-base";
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

function IntroScreen2({ navigation }) {
  const onboardingInfo = useOnboarding();

  const renderItems = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.content}>
          <ImageBackground
            style={{
              resizeMode: "cover",
              height: 100,
              width: "95%",
            }}
            source={require("@/assets/images/brush.png")}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <AppText
                style={styles.title}
                fontSize="4xl"
                fontFamily="playfair-extra-bold-italic"
              >
                {item.title}
              </AppText>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.textContainer}>
          <AppText style={styles.text} fontFamily="playfair-italic">
            {item.text}
          </AppText>
        </View>
      </View>
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
      <ImageBackground
        style={styles.slide}
        source={require("@/assets/images/pet-3.jpg")}
      >
        <AppIntroSlider
          renderItem={renderItems}
          data={slides}
          renderDoneButton={_renderDoneButton}
          renderNextButton={_renderNextButton}
          onDone={handleDone}
        />
      </ImageBackground>
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
  textContainer: {
    position: "absolute",
    bottom: 80,
    right: 0,
    left: 0,
  },
  text: {
    color: "#efefef",
    marginTop: 92,
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

export default IntroScreen2;
