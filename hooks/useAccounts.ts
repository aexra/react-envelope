import { useContext } from "react";
import { useObjectLocalStorage } from "./useObjectLocalStorage";
import { AccountsContext } from "../contexts/AccountsContext";
import { Auth } from "../interfaces/Auth";

export const useAccounts = () => {
    const { accounts, setAccounts: setAccountsObject } = useContext(AccountsContext);
    const { setItem, getItem } = useObjectLocalStorage();

    const addAccount = (auth: Auth) => {
        var list: Auth[] | null = getItem("accounts");
        if (!list) list = [auth];
        else list = [...list, auth];

        setItem("accounts", list);
        setAccountsObject(list);
    };

    const removeAccount = (auth: Auth) => {
        var list: Auth[] | null = getItem("accounts");
        if (list) list = list.filter(a => a.login != auth.login);
        
        setItem("accounts", list);
        setAccountsObject(list);
    };

    return { accounts, addAccount, removeAccount };
};