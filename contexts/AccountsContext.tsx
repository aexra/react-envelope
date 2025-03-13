import React, { createContext, useEffect, useState } from "react";
import { User } from "../interfaces/User";
import { useObjectLocalStorage } from "../hooks/useObjectLocalStorage";

interface IAccountsContext {
  accounts: User[] | null;
  setAccounts: (accounts: User[] | null) => void;
}

export const AccountsContext = createContext<IAccountsContext>({
  accounts: null,
  setAccounts: () => {},
});

export const AccountsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [accounts, setAccounts] = useState<User[] | null>([]);
  
  const { getItem, setItem } = useObjectLocalStorage();

  useEffect(() => {
    const accounts = getItem("accounts");
    if (accounts) {
      setAccounts(accounts);
    } else {
      setItem("accounts", []);
    }
  }, []);

  return (
    <AccountsContext.Provider value={{
      accounts,
      setAccounts
    }}>
      {children}
    </AccountsContext.Provider>
  );
};