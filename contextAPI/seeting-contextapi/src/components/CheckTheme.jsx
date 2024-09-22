import React from 'react';
import { useContext } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import {UserContextProvider} from '../context/UserContext'

const CheckTheme = () => {
    const {theme, handleTheme} = useContext(ThemeProvider)
    const {isAuthenticated, login, logout, user} = useContext(UserContextProvider)

  return (
    <div style={{
        backgroundColor: theme? 'pink' : 'green',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
    }}>
      <h2>This is a container</h2>
     <div>
     {
        isAuthenticated?
       <>
        <h1>{user.name}</h1>
        <button onClick={logout}>LogOut</button>
       </>
        :
       <>
        <h1>Please login first</h1>
        <button onClick={()=> login({name: "Sanjeev kumar"})}>Login as Sanjeev kumar</button>
       </>
      }
     </div>
      <button onClick={handleTheme}>{theme? 'light' : 'dark'} theme</button>
    </div>
  );
}

export default CheckTheme;
