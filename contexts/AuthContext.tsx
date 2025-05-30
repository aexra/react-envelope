import React, { createContext, useEffect, useState } from "react";
import { User } from "../../interfaces/User";
import { useObjectLocalStorage } from "../hooks/useObjectLocalStorage";
import { Auth } from "../../interfaces/Auth";
import { me, roles } from "../../api/user";
import { getavatar } from "../../api/image";
import axios from "axios";

interface IAuthContext {
    user: User | null;
    auth: Auth | null;
    isLoading: boolean;
    setUser: (user: User | null) => void;
    setAuth: (auth: Auth | null) => void;
}

export const AuthContext = createContext<IAuthContext>({
    user: null,
    auth: null,
    isLoading: true,
    setUser: () => { },
    setAuth: () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [auth, setAuth] = useState<Auth | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { getItem, removeItem } = useObjectLocalStorage();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mr = await me();
                const rr = await roles();

                if (mr.data) {
                    setUser(mr.data);
                }

                if (rr.data) {
                    setUser({
                        ...mr.data,
                        roles: rr.data.map((rd: { roleName: any; }) => rd.roleName)
                    });
                }

            } catch (er) {
                if (axios.isAxiosError(er) && (er.response?.status === 401)) {
                    removeItem('auth')
                    setAuth(null);
                    setUser(null);
                }
            }
        };

        const auth = getItem("auth");

        if (auth) {
            setAuth(auth);
            fetchData();
        }
    }, []);

    useEffect(() => {
        if (auth && user) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [auth, user]);

    return (
        <AuthContext.Provider value={{
            user,
            auth,
            isLoading,
            setUser,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    );
};