import { useEffect, useState } from "react";
import * as Location from "expo-location";
import logger from "@/util/logger";
import { LocationEntity } from "@/types.project";

export default () => {
  const [location, setLocation] = useState<LocationEntity | null>(null);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        console.log("Location permission not granted!");
        return;
      }

      const lastKnownPosition = await Location.getLastKnownPositionAsync();
      if (!lastKnownPosition) {
        return;
      }

      const { latitude, longitude } = lastKnownPosition.coords;
      setLocation({ latitude, longitude });
    } catch (error) {
      logger.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
