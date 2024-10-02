import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route , Routes} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Quiz from '../components/Quiz';
import { PrivateRoute } from './privateRoute';

const NavRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
       
       <Route path='/quiz' element={<PrivateRoute><Quiz/></PrivateRoute>}/>
       
      </Routes>
    </Box>
  );
}

export default NavRoutes;
