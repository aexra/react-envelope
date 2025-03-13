import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../interfaces/User";
import { useObjectLocalStorage } from "./useObjectLocalStorage";

export const useUser = () => {
  const { user, setUser: setUserObject } = useContext(AuthContext);
  const { setItem, removeItem } = useObjectLocalStorage();

  const setUser = (user: User) => {
    setUserObject(user);
    setItem("user", user);
  };

  const removeUser = () => {
    setUserObject(null);
    removeItem("user");
  };

  return { user, setUser, removeUser };
};
