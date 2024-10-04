import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {Link as ChakraLink, Box} from '@chakra-ui/react'

const Navbar = () => {
    const links = [
        {
            to: '/',
            path: 'Add Book'
        },
        {
            to: '/seeBooks',
            path: 'See Book'
        },
        {
            to: '/editBook/:id',
            path: 'Edit Book'
        }
    ]
  return (
    <Box 
    display='flex'
    justifyContent='space-around'
    alignItems='center'
    p={4}
    bgColor='gray.200'
    >
      {
        links.map((ele,i)=>{
         return   <ChakraLink key={i} as={RouterLink} to={ele.to}>{ele.path}</ChakraLink>
        })
      }
    </Box>
  );
}

export default Navbar;
