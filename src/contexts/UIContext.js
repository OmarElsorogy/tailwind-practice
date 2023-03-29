import { createContext, useState } from "react";

export const ThemeContext = createContext({
  appTheme: "dark",
  toggleTheme: () => {},
});

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");
  const toggleThemeHandler = () => {
    setTheme((theme) => (theme == "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider
      value={{ appTheme: theme, toggleTheme: toggleThemeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
