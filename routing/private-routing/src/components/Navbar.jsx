import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom'
import {Link as ChakraLink , Flex} from '@chakra-ui/react'


const links = [
    {
        to: '/',
        path: 'Home'
    },
    {
        to: '/product',
        path: 'Product'
    },
    {
        to: '/contact',
        path: 'Contact'
    },
    {
        to: '/about',
        path: 'About'
    },
    {
        to: '/login',
        path: 'Login'
    }
    
]
const Navbar = () => {
    return (
        <Flex align="center" justify="space-around" bgColor='#E2E8F0' p={4}>
           {
            links?.map((ele, i)=>(
                <ChakraLink as={ReactRouterLink} fontSize='lg' color='#4A5568' key={i} to={ele.to}>{ele.path}</ChakraLink>
            ))
           }
        </Flex>
    );
}

export default Navbar;
