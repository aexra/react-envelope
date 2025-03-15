import React, { createContext, useEffect, useState } from "react";
import { useObjectLocalStorage } from "../hooks/useObjectLocalStorage";
import { Auth } from "../interfaces/Auth";

interface IAccountsContext {
  accounts: Auth[] | null;
  setAccounts: (accounts: Auth[] | null) => void;
}

export const AccountsContext = createContext<IAccountsContext>({
  accounts: null,
  setAccounts: () => {},
});

export const AccountsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [accounts, setAccounts] = useState<Auth[] | null>([]);
  const { getItem, setItem } = useObjectLocalStorage();

  useEffect(() => {
    const accounts = getItem("accounts");
    if (accounts) {

      // TODO: Проверить все аккаунты на валидность токенов, 
      // если не валидны токены - удалить аккаунт 
      // (или попробовать войти через сохраненные данные, если они есть)

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