import { useState, createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material";
import { getTheme } from '../themes';


const ThemeModeContext = createContext();
export const useThemeModeContext = () => useContext(ThemeModeContext);

const ThemeContext = ({ children }) => {
  const { themeMode } = useThemeModeContext();
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default function ThemeContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light');

  return (
    <ThemeModeContext.Provider value={{
      themeMode, setThemeMode
    }}>
      <ThemeContext>
        {children}
      </ThemeContext>
    </ThemeModeContext.Provider>
  );
};