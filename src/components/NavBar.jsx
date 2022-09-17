import React from 'react'
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Typography } from "@mui/material";
import { useThemeContext, useUpdateThemeContext} from "../utils/ThemeContext"

export default function NavBar() {

  const theme = useThemeContext()
  const toggleTheme = useUpdateThemeContext()

  return (
    <>
    <Toolbar sx={{ borderBottom: 1, borderColor: "divider", justifyContent:'space-between'}}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          sx={{ flex: 1 }}
        >
         TASK MANAGER
        </Typography>
        {theme} mode
       <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        </Toolbar> 
    </>
  )
}
