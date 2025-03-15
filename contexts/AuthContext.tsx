import React, { createContext, useEffect, useState } from "react";
import { User } from "../interfaces/User";
import { useObjectLocalStorage } from "../hooks/useObjectLocalStorage";
import { Auth } from "../interfaces/Auth";
import { me } from "../api/user";

interface IAuthContext {
  user: User | null;
  auth: Auth | null;
  setUser: (user: User | null) => void;
  setAuth: (auth: Auth | null) => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  auth: null,
  setUser: () => {},
  setAuth: () => {},
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);

  const { getItem, removeItem } = useObjectLocalStorage();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const mr = await me();
      
        if (mr.data) {
          setUser(mr.data);
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

  return (
    <AuthContext.Provider value={{
      user,
      auth,
      setUser,
      setAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
};