import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

import expoPushTokensApi from "@/api/expoPushTokens";
import logger from "@/util/logger";

const useNotifications = (notificationListenerFn, responseListenerFn) => {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotifications();

    // This listener is fired whenever a notification is received while the app is foregrounded
    if (notificationListenerFn)
      notificationListener.current =
        Notifications.addNotificationReceivedListener(notificationListenerFn);

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    if (responseListenerFn)
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener(
          responseListenerFn
        );

    return () => {
      if (notificationListenerFn)
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );

      if (responseListenerFn)
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) {
        return;
      }

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }
    } catch (error) {
      console.log("error getting push token");
      logger.log(error);
    }
  };
};

export default useNotifications;
