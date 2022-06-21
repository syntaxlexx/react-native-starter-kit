import Constants from "expo-constants";

const appName = "RN Starter Kit";

const settings = {
  dev: {
    apiUrl: "https://8ba7-41-80-112-34.ngrok.io",
    appName: appName,
    supportDarkMode: true,
    enableBugsnag: false,
    admob: {
      banner: "ca-app-pub-3940256099942544/6300978111",
      interstitial: "ca-app-pub-3940256099942544/1033173712",
      rewarded: "ca-app-pub-3940256099942544/5224354917",
      publisherBanner: "ca-app-pub-3940256099942544/6300978111",
    },
  },
  staging: {
    apiUrl: "https://apps.luckycowfreelancers.com",
    projectId: "6282418f08db09e094cb",
    appName: appName,
    supportDarkMode: true,
    enableBugsnag: false,
    admob: {
      banner: "ca-app-pub-3940256099942544/6300978111",
      interstitial: "ca-app-pub-3940256099942544/1033173712",
      rewarded: "ca-app-pub-3940256099942544/5224354917",
      publisherBanner: "ca-app-pub-3940256099942544/6300978111",
    },
  },
  prod: {
    apiUrl: "https://apps.luckycowfreelancers.com",
    projectId: "6282418f08db09e094cb",
    appName: appName,
    supportDarkMode: true,
    enableBugsnag: false,
    admob: {
      banner: "ca-app-pub-3940256099942544/6300978111",
      interstitial: "ca-app-pub-3940256099942544/1033173712",
      rewarded: "ca-app-pub-3940256099942544/5224354917",
      publisherBanner: "ca-app-pub-3940256099942544/6300978111",
    },
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;

  if (Constants.manifest?.releaseChannel === "staging") return settings.staging;

  return settings.prod;
};

export default getCurrentSettings();
