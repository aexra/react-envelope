import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SyntaxHighlighterContext } from "../contexts/SyntaxHighlighterContext";

export const useTheme = () => {
    const [ theme, isLight, setTheme ] = useContext(ThemeContext);
    const [ code ] = useContext(SyntaxHighlighterContext);
    return { theme, code, isLight, setTheme }
};