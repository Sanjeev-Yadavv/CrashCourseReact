import React from 'react';
import Home from './components/Home';
import {Link as ChakraLink, Flex} from '@chakra-ui/react'
import {Route, Routes , Link as RouterLink} from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';

const AllRoutes = () => {
    const links = [
        {
            to : '/',
            path: 'Home'
        },
        {
            to : '/products',
            path: 'Products'
        },
        {
            to : '/product',
            path: 'Product'
        }
    ]
  return (
    <div>
        <Flex
        justify='space-around'
        align='center'
        gap={6}
        bgColor='gray.200'
        p={4}
        >
           {
            links.map((ele, i)=>(
                <ChakraLink
                 as={RouterLink}
                  key={i}
                   to={ele.to}
                   
                   fontSize={20}
                   >
                    {ele.path}
                    </ChakraLink>
            ))
           }
        </Flex>
        
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
