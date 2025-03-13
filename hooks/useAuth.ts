import { me } from '../api/user';
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
        removeAccount(user);
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
        window.location.reload();
    };

    const refresh = async () => {
        try {
            const mr = await me();

            login({
                id: mr.data.id,
                login: auth?.login,
                password: auth?.password,
                firstname: mr.data.firstname,
                lastname: mr.data.lastname,
                middlename: mr.data.middlename,
                token: auth?.token
            }, false);
        } catch (er) {
            console.log(er);
        }
    };

    return { auth, accounts, login, logout, logoutAuth, switchAuth, refresh }
};