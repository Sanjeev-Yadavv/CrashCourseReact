import React from 'react';
import { createContext, useState } from 'react';

export const UserContextProvider = createContext()

const UserContext = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    const login = (newUser) => {
        setUser(newUser)
        setIsAuthenticated(true)
    }

    const logout = () =>{
        setUser('')
        setIsAuthenticated(false)
    }
  return (
    <div>
      <UserContextProvider.Provider value={{user, isAuthenticated, login, logout}}>
        {children}
      </UserContextProvider.Provider>
    </div>
  );
}



export default UserContext;
