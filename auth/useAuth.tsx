import { LoginResponse, UserEntity } from "@/types.project";
import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = async (loginData: LoginResponse) => {
    const user = loginData.user;
    setUser(user);

    authStorage.storeToken(loginData.token.token);
    authStorage.storeUser(user);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
    authStorage.removeUser();
  };

  const isLoggedIn = async () => {
    const status = await authStorage.getToken();
    return !!status;
  };

  const updateUser = async (user: UserEntity) => {
    setUser(user);
    authStorage.storeUser(user);
  };

  return {
    user,
    setUser,
    logout,
    login,
    isLoggedIn,
    updateUser,
  };
};

export default useAuth;
