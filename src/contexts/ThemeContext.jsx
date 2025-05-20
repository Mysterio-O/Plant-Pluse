import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // This ensures the theme is loaded immediately on first render
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            return saved || systemPref;
        }
        return "light"; // Fallback for SSR
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="transition-colors duration-1000">
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
