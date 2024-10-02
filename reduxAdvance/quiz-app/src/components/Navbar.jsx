import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { resetToken } from '../redux/action';

const Navbar = () => {
    const token = useSelector((state)=>state.login.token)
    const dispatch = useDispatch()
    const links = [
        {
            to : '/',
            path : 'Home'
        },
        {
            to : '/login',
            path : 'Login'
        },
        {
            to : '/quiz',
            path : 'Quiz'
        }
    ]

    function handleClick(){
        dispatch(resetToken())
    }
  return (
    <Box
    display='flex'
    alignItems='center'
    justifyContent='space-around'
    bgColor='gray.200'
    p={4}
    fontSize={30}
    >
      {
        links?.map((ele,i)=>(
            <ChakraLink 
           key={i}
            as={RouterLink} to={ele.to}>{ele.path}</ChakraLink>
        ))
      }

     
     <Button
     variant='outline'
     color='red'
     display={token? 'block': 'none'}
     onClick={handleClick}
     >Logout</Button>
     
    </Box>
  );
}

export default Navbar;
