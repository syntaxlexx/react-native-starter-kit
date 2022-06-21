import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import logger from "./logger";

const prefix = "cache";
const expiryInMinutes = 5;

type CacheValueType = string | null | number | object | Array<string | number | object>

const store = async (key: String, value: CacheValueType) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    logger.log("cache error");
    logger.log(error);
  }
};

const isExpired = (item) => {
  const now = dayjs();
  const storeTime = dayjs(item.timestamp);
  return now.diff(storeTime, "minute") > expiryInMinutes;
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Separation (CQS) rule broken here
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    logger.log("cache error");
    logger.log(error);
  }
};

export default {
  store,
  get,
};
