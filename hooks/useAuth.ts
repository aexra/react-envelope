import { useEffect } from "react";
import { useUser } from "./useUser";
import { User } from "../interfaces/User";
import { useAccounts } from "./useAccounts";
import { useObjectLocalStorage } from "./useObjectLocalStorage";

export const useAuth = () => {
  const { user: auth, addUser, removeUser, setUser } = useUser();
  const { getItem } = useObjectLocalStorage();
  const { accounts, addAccount, removeAccount, setAccounts } = useAccounts();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(user);
    }

    const accounts = getItem("accounts");
    if (accounts) {
      setAccounts(accounts);
    }
  }, [addUser, getItem, setAccounts]);

  const login = (user: User, save: boolean = false) => {
    if (save && auth) {
      addAccount(auth);
    }
    addUser(user);
  };

  const logout = (save: boolean = false) => {
    if (save && auth) {
      addAccount(auth);
    }
    removeUser();
  };

  const logoutAccount = (user: User) => {
    removeAccount(user);
  }

  const switchAccount = (user: User) => {
    removeAccount(user);
    if (auth) addAccount(auth);
    addUser(user);
  };

  return { auth, login, logout, logoutAccount, setUser, switchAccount };
};