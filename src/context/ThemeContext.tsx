import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from "styled-components";

type Theme = "light" | "dark";

interface ThemeContextProps {
    theme: Theme;
    toggleTheme?: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: undefined,
});

const THEME_LIGHT = "light";
const THEME_DARK = "dark";

const lightTheme: DefaultTheme = {
    background: "#f7f5f1",
    color: "#130d0f",
};

const darkTheme: DefaultTheme = {
    background: "#130d0f",
    color: "#f7f5f1",
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(THEME_LIGHT);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT));
    };

    const currentTheme = theme === THEME_LIGHT ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
