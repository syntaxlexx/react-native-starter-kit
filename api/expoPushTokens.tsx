import Settings from "@/constants/Settings";
import client from "./client";

const register = (pushToken: string) =>
  client.post("expo-push-tokens", {
    token: pushToken,
    app_name: Settings.appName,
  });

export default {
  register,
};
