import { useContext } from "react";
import { User } from "../interfaces/User";
import { useObjectLocalStorage } from "./useObjectLocalStorage";
import { AccountsContext } from "../contexts/AccountsContext";

export const useAccounts = () => {
    const { setItem, getItem } = useObjectLocalStorage();
    const { accounts, setAccounts } = useContext(AccountsContext);

    const addAccount = (user: User) => {
        var list: User[] | null = getItem("accounts");
        if (!list) list = [user];
        else list = [...list, user];

        setItem("accounts", list);
        setAccounts(list);
    };

    const removeAccount = (user: User) => {
        var list: User[] | null = getItem("accounts");
        if (list) list = list.filter(u => u != user);
        
        setItem("accounts", list);
        setAccounts(list);
    };

    return { accounts, addAccount, removeAccount, setAccounts };
};