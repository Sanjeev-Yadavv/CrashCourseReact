import React from 'react';
import { createContext } from 'react';
import {useState} from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState({status: false, token: null})

    function login (token) {
           setIsLogin({
            status: true,
            token: token
           })
        }
        function logout (){
            setIsLogin({
                status: false,
                token: null
            })
        }

  return (
    <div>
      <AuthContext.Provider value={{login, setIsLogin, isLogin, logout}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthContextProvider;
