import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollRestoration = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, [pathname]);

    return null;
}