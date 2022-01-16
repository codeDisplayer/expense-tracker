import { createTheme } from "@mui/material";
import { lime } from "@mui/material/colors";


const lightTheme = createTheme({
  palette: {
    primary: {
      main: lime['A700']
    },
    secondary: {
      main: lime['700'],
    },
  }
});

export default lightTheme;