import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";



const darkTheme = createTheme({
  palette: {
    primary: {
      main: grey['A700'],
      dark: grey['A700']
    },
    secondary: {
      main: grey['700'],
      dark: grey['700']
    },
  }
});

export default darkTheme;