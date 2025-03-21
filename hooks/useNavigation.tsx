import { ReactElement, useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";
import { Route } from "../interfaces/Route";
import { NavLink } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useNavigation = () => {
    const { routes, setRoutes } = useContext(NavigationContext);
    const { user } = useAuth();

    const add = (...new_routes: Route[]) => {
        setRoutes([...routes, ...new_routes]);
    };

    const remove = (route: Route) => {
        setRoutes(routes.filter(r => r != route));
    };

    const clear = () => {
        setRoutes([]);
    };

    const navlinks = (Component: React.ElementType = NavLink) => {
        if (!routes) return null;

        return routes.map((route, i) => {
            const { permissions, requireAuth, children, props, ...mainRouteProps } = route;

            if (requireAuth && !user) return null;

            if (permissions) {
                if (!user || !user?.roles) return null;
                const perms = permissions.split(" ");
                const hasPermission = perms.every(p => user?.roles?.includes(p));
                if (!hasPermission) return null;
            }

            return (
                <Component key={i}
                           {...mainRouteProps}
                           {...props}>
                    {children}
                </Component>
            );
        });
    };

    return { routes, add, remove, clear, navlinks };
};