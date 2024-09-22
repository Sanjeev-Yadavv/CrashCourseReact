import React from 'react';
import { useState, createContext } from 'react';

export const ThemeProvider = createContext()

const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState(false)

    const handleTheme = ()=>{
        setTheme(!theme)
    }
  return (
    <div>
      <ThemeProvider.Provider value={{theme, handleTheme}}>
        {children}
      </ThemeProvider.Provider>
    </div>
  );
}

export default ThemeContext;
