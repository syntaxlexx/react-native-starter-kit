import Settings from "@/constants/Settings";
import Bugsnag, { NotifiableError } from "@bugsnag/expo";

const log = (error: Error|NotifiableError|string|undefined|null) => {
  if (Settings.enableBugsnag) {
    Bugsnag.notify(error);
  } else {
    console.log(error);
  }
};

const start = () =>
  Bugsnag.start({
    autoDetectErrors: Settings.enableBugsnag,
  });

export default {
  log,
  start,
};
