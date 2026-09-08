import React, { useEffect, useState } from 'react';
import { ThemeContext, type Theme, type ThemeContextValue } from '../theme';

const getInitialTheme = (): Theme => {
    const stored = document.documentElement.getAttribute('data-theme');
    return stored === 'dark' ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            console.error('Impossible de sauvegarder le thème:', e);
        }
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    const value: ThemeContextValue = { theme, toggleTheme };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};