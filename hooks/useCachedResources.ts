import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "playfair-extra-bold-italic": require("../assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf"),
          "playfair-italic": require("../assets/fonts/PlayfairDisplay-Italic.ttf"),
          avenir: require("../assets/fonts/Avenir-Book.otf"),
        });

        await cacheImages([
          require("../assets/images/icon.png"),
          require("../assets/images/splash.png"),
          require("../assets/images/pet-1.jpg"),
          require("../assets/images/pet-2.jpg"),
          require("../assets/images/pet-3.jpg"),
        ]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
