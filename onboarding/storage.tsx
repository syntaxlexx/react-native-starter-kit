import AsyncStorage from "@react-native-async-storage/async-storage";
import logger from "@/util/logger";

const key = "BOARDED_KEY";

const store = async () => {
  try {
    await AsyncStorage.setItem(key, "boarded");
  } catch (error) {
    logger.log("error storing borded token");
    logger.log(error);
  }
};

const get = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return true;
    }
  } catch (error) {
    logger.log("error getting auth token");
    logger.log(error);
  }
  return false;
};

const remove = async () => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("error removing auth token", error);
  }
};

export default {
  store,
  get,
  remove,
};
