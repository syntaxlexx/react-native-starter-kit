import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Box } from "native-base";
import LottieView from "lottie-react-native";

import ROUTES from "@/navigation/routes";
import { AppText } from "@/components";

function SplashScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [initializingFailed, setInitializingFailed] = useState(false);

  const initialise = async () => {
    try {
      // initialise the initial store data here
      setLoading(false);

      setTimeout(() => {
        navigation.replace(ROUTES.HOME);
      }, 2000);
    } catch (error) {
      // console.log("error", error);
      setInitializingFailed(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    initialise();
  }, []);

  return (
    <Box style={styles.container}>
      <ImageBackground
        style={{
          resizeMode: "cover",
          height: "100%",
          width: "100%",
        }}
        source={require("@/assets/images/pet-2.jpg")}
      >
        <Box alignItems="center" justifyContent="flex-end" h="100%">
          <Box mb="10%">
            {!initializingFailed && (
              <Box>
                <LottieView
                  autoPlay
                  loop
                  source={require("@/assets/animations/spinning-cat.json")}
                  style={styles.lottie}
                />

                <AppText
                  fontFamily="playfair-italic"
                  fontSize="2xl"
                  color="gray.100"
                  mt="10"
                  ml="20%"
                >
                  {loading ? "Initializing data..." : "Finalizing..."}
                </AppText>
              </Box>
            )}

            {initializingFailed && (
              <AppText fontSize="md" color="gray.100" my="10">
                Failed to fetch data. Please restart the app.
              </AppText>
            )}
          </Box>
        </Box>
      </ImageBackground>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  lottie: {
    height: 200,
    marginRight: 20,
  },
});

export default SplashScreen;
