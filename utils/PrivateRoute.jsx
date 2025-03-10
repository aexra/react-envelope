import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const PrivateRoute = () => {
    const { auth, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        auth ? <Outlet/> : <Navigate to='/login'/>
    );
};