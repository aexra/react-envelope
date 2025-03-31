import React, { createContext, useEffect, useState } from "react";
import { User } from "../../interfaces/User";
import { useObjectLocalStorage } from "../hooks/useObjectLocalStorage";
import { Auth } from "../../interfaces/Auth";
import { me } from "../../api/user";
import { getavatar } from "../../api/image";

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
  setUser: () => {},
  setAuth: () => {},
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { getItem, removeItem } = useObjectLocalStorage();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const mr = await me();
      
        if (mr.data) {
          setUser(mr.data);
        }

        if (mr.data.avatarId) {
          try {
            const ar = await getavatar(mr.data.avatarId);

            if (ar.data) {
              setUser({
                ...mr.data,
                avatar: ar.data
              })
            }
          } catch {}
        }
      } catch (er) {
        removeItem('auth')
        setAuth(null);
        setUser(null);
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