import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

// NOTE: optimally move this into a separate file
export interface User {
  id?: string;
  login?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
  token?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser, setUser };
};
