import { useContext } from "react";
import OnboardingContext from "./context";
import storage from "./storage";

const useOnboarding = () => {
  const { isOnboard, setIsOnboard } = useContext(OnboardingContext);

  const store = async () => {
    try {
      await storage.store();
      setIsOnboard(true);
    } catch (e) {
      // saving error
    }
  };

  const checkIfAlreadyOnboard = async () => {
    try {
      const value = await storage.get();
      if (value) {
        setIsOnboard(true);
        return true;
      }
    } catch (e) {
      // error reading value
    }
    return false;
  };

  const reset = async () => {
    try {
      await storage.remove();
      setIsOnboard(false);
    } catch (e) {
      // error removing value
      console.log("reset error", e);
    }
  };

  return {
    isOnboard,
    setIsOnboard,
    checkIfAlreadyOnboard,
    store,
    reset,
  };
};

export default useOnboarding;
