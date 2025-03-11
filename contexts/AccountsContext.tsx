import { createContext } from "react";
import { User } from "../interfaces/User";

interface AccountsContext {
  accounts: User[] | null;
  setAccounts: (accounts: User[] | null) => void;
}

export const AccountsContext = createContext<AccountsContext>({
  accounts: null,
  setAccounts: () => {},
});