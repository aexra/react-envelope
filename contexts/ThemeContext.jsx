import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setThemeState] = useState(localStorage.getItem('theme') ?? 'light');
    const [isLight, setIsLight] = useState(true);
    
    useEffect(() => {
        const setClass = (className) => {
            document.body.classList.forEach((s, n, p) => { document.body.classList.remove(s); });
            document.body.classList.add(className);
        };

        setClass(theme);
        localStorage.setItem('theme', theme);
        setIsLight(theme === 'light');
    }, [theme]);

    return (
        <ThemeContext.Provider value={[ theme, isLight, setThemeState ]}>
            {children}
        </ThemeContext.Provider>
    )
};