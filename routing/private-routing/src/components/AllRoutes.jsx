import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Products from '../pages/Products'
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import About from '../pages/About';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './AuthContextProvider';
import { useContext } from 'react'
import { Button } from '@chakra-ui/react';


const AllRoutes = () => {
  const { isLogin, logout } = useContext(AuthContext)
const {token} = isLogin

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>} />
        <Route path='/login'
          element={token ?
            <Button
              onClick={logout}
              colorScheme='teal'
              variant='outline'
            >
              Logout
            </Button>
            :
            <Login />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
