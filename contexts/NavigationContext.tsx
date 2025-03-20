import { createContext, useState } from "react";
import { Route } from "../interfaces/Route";

interface INavigationContext {
    routes: Route[];
    setRoutes: (routes: Route[]) => void;
}

export const NavigationContext = createContext<INavigationContext>({
    routes: [],
    setRoutes: () => {}
});

export const NavigationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [routes, setRoutes] = useState<Route[]>([]);

    return (
        <NavigationContext.Provider value={{
            routes,
            setRoutes
        }}>
            {children}
        </NavigationContext.Provider>
    );
};