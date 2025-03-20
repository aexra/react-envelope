import { useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";
import { Route } from "../interfaces/Route";

export const useNavigation = () => {
    const { routes, setRoutes } = useContext(NavigationContext);

    const add = (...new_routes: Route[]) => {
        setRoutes([...routes, ...new_routes]);
    };

    const remove = (route: Route) => {
        setRoutes(routes.filter(r => r != route));
    };

    const clear = () => {
        setRoutes([]);
    };

    return { routes, add, remove, clear };
};