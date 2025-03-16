import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../interfaces/User";
import { Auth } from "../interfaces/Auth";
import { useObjectLocalStorage } from "./useObjectLocalStorage";

export const useUser = () => {
  const { auth, user, setUser: setUserObject, setAuth: setAuthObject } = useContext(AuthContext);
  const { setItem, removeItem } = useObjectLocalStorage();

  const setUser = (user: User) => {
    setUserObject(user);
  };

  const remove = () => {
    setAuthObject(null);
    setUserObject(null);
    removeItem('auth');
  };

  const setAuth = (auth: Auth) => {
    setAuthObject(auth);
    setItem("auth", auth);
  };

  return { auth, user, setAuth, setUser, remove };
};
