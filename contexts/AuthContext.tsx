import React, { createContext, useEffect, useState } from "react";
import { User } from "../interfaces/User";
import { useObjectLocalStorage } from "../hooks/useObjectLocalStorage";

interface IAuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const { getItem, setItem } = useObjectLocalStorage();
  
  useEffect(() => {
    const user = getItem("user");

    

    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};