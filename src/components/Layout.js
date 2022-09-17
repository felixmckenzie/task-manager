import React from "react";
import { useThemeContext} from "../utils/ThemeContext"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


export default function Layout({children}) {
 const currentTheme = useThemeContext()
 const theme = createTheme({
    palette: {
      mode: currentTheme,
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
