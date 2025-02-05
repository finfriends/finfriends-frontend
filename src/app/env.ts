import Constants from "expo-constants";

const getEnvVars = () => {
  const releaseChannel = Constants.expoConfig?.extra?.releaseChannel || "dev";

  const ENV = {
    dev: {
      webViewUrl: 'https://jes.finfriends.site',
    },
    staging: {
      webViewUrl: 'https://app.finfriends.site',
    },
    prod: {
      webViewUrl: 'https://app.finfriends.site',
    },
  };

  if (__DEV__) {
    return ENV.dev;
  } else if (releaseChannel === "staging") {
    return ENV.staging;
  } else if (releaseChannel === "prod") {
    return ENV.prod;
  }

  return ENV.dev; // 기본값
};

export default getEnvVars;
