import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () => {
    const [ theme, isLight, setTheme ] = useContext(ThemeContext);
    return { theme, isLight, setTheme }
};