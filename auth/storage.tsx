import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import logger from "../util/logger";
import { UserEntity } from "@/types.project";

const key = "authToken";
const userKey = "user";

const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    logger.log("error storing auth token");
    logger.log(error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    logger.log("error getting auth token");
    logger.log(error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error removing auth token");
    logger.log(error);
  }
};

const getUser = async (): Promise<UserEntity | undefined> => {
  try {
    const user = await AsyncStorage.getItem(userKey);
    if (!user) return undefined;
    return JSON.parse(user);
  } catch (error) {
    console.log("error getting user");
    logger.log(error);
  }
};

const storeUser = async (user: UserEntity) => {
  try {
    await AsyncStorage.setItem(userKey, JSON.stringify(user));
  } catch (error) {
    logger.log("error storing user");
    logger.log(error);
  }
};

const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(userKey);
  } catch (error) {
    console.log("error removing user", error);
  }
};

export default {
  getUser,
  storeUser,
  removeUser,
  getToken,
  storeToken,
  removeToken,
};
