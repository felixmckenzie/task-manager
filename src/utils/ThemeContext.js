import React, {createContext, useContext,useState} from "react";

 const UpdateThemeContext = createContext()
  const ThemeContext = createContext()
 
export function useUpdateThemeContext () {
    return useContext(UpdateThemeContext)
 }

export function useThemeContext  () {
  return useContext(ThemeContext)
}



export function CustomThemeProvider ({children}) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () =>  {
            setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
          }

    return (
        <UpdateThemeContext.Provider value={toggleTheme}>
        <ThemeContext.Provider value={theme}>
        {children}
        </ThemeContext.Provider>
        </UpdateThemeContext.Provider>
    )
}

