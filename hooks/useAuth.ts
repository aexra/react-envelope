import { me } from '../../api/user';
import { Auth } from '../../interfaces/Auth';
import { useAccounts } from './useAccounts';
import { useUser } from './useUser';
import { login as _login, register as _register } from '../../api/auth';
import { User } from '../../interfaces/User';
import { useState } from 'react';

export const useAuth = () => {
    const { auth: _auth, user: _user, isLoading, setAuth, setUser, remove } = useUser();
    const { accounts, addAccount, removeAccount } = useAccounts();

    const register = async (auth: { login: string, password: string }, user: User) => {
        const response = await _register(auth, user);
        return response;
    };

    const login = async (auth: { login: string, password: string }, savePassword: boolean = false, savePreviousAccount = true) => {
        try {
            const lr = await _login(auth.login, auth.password);

            if (lr.status !== 200) {
                throw('Invalid password or username');
            }

            const new_auth: Auth = {
                token: lr.data.token,
                login: auth.login,
                password: (savePassword ? auth.password : null)
            };
            
            if (savePreviousAccount && _auth) {
                addAccount(_auth);
            }
            
            setAuth(new_auth);
            removeAccount(new_auth);

            return await refresh(false);
        } catch (er) {
            throw(er);
        }
    };

    const logout = async (savePreviousAccount: boolean = false) => {
        if (savePreviousAccount && _auth) {
            addAccount(_auth);
        }
        remove();
    };

    const logoutAuth = async (auth: Auth) => {
        removeAccount(auth);
    }

    const switchAuth = async (auth: Auth) => {
        removeAccount(auth);
        if (_auth) addAccount(_auth);
        setAuth(auth);

        await refresh();

        window.location.reload();
    };

    const refresh = async (reload: boolean = true) => {
        try {
            const mr = await me();
            setUser(mr.data);
            if (reload) window.location.reload();
        } catch (er) {
            console.log(er);
            remove();
            throw(er);
        }
    };

    return { auth: _auth, user: _user, isLoading, accounts, register, login, logout, logoutAuth, switchAuth, refresh }
};