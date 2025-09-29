import { createContext, useContext, useEffect, useState } from "react";
import { theme } from "./theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // set initial value
    setMode(mediaQuery.matches ? "dark" : "light");

    // listen for changes
    const handler = (e) => setMode(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const activeTheme = theme[mode];

  // apply theme directly to <body>
  useEffect(() => {
    document.body.style.backgroundColor = activeTheme.colors.background;
    document.body.style.color = activeTheme.colors.text;
    document.body.style.fontFamily = "Inter, sans-serif";
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ mode, activeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
