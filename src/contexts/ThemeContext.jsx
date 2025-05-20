import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

        setTheme(savedTheme || systemPref);
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div
                className={`${theme} transition-colors duration-1000`}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext)
}