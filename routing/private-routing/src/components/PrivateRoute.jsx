import React from 'react';
import { AuthContext } from './AuthContextProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {isLogin} = useContext(AuthContext)
      const {status, token} = isLogin
    if(status !== true && token == null){
       return  <Navigate to='/login'/>
    }
  return <>
   {children}
  </>
}

export default PrivateRoute;
