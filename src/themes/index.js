import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

export const getTheme = (themeMode) => {
  switch(themeMode) {
    case 'light': return lightTheme;
    case 'dark': return darkTheme;
    default: return lightTheme;
  }  
}