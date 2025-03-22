import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Auth } from "../../interfaces/Auth";
import { User } from "../../interfaces/User";
import { FC } from "react";

const access = (auth: Auth | null, user: User | null, roles: string | null) => {
    if (auth) {
        if (roles) {
            if (user && user.roles) return checkRoles(user, roles);
            else return false;
        }
        else return true;
    }
    return false;
};

const checkRoles = (user: User, roles: string) => {
    const rolesList = roles.split(" ");
    rolesList.forEach((r: string) => {
        if (!user.roles?.includes(r)) return false;
    });
    return true;
};

interface IPrivateRouteProps {
    roles: string | null;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ roles }) => {
    const { auth, user, isLoading } = useAuth();

    return (
        !isLoading && (access(auth, user, roles) ? <Outlet/> : <Navigate to='/login'/>)
    );
};