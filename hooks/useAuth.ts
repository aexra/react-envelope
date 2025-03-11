import { User } from '../interfaces/User';
import { useAccounts } from './useAccounts';
import { useUser } from './useUser';

export const useAuth = () => {
    const { user: auth, setUser, removeUser } = useUser();
    const { accounts, addAccount, removeAccount } = useAccounts();

    const login = (user: User, save: boolean = false) => {
        if (save && auth) {
            addAccount(auth);
        }
        setUser(user);
    };

    const logout = (save: boolean = false) => {
        if (save && auth) {
            addAccount(auth);
        }
        removeUser();
    };

    const logoutAuth = (user: User) => {
        removeAccount(user);
    }

    const switchAuth = (user: User) => {
        removeAccount(user);
        if (auth) addAccount(auth);
        setUser(user);
    };

    return { auth, accounts, login, logout, logoutAuth, switchAuth }
};