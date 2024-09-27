import { Box , CircularProgress, Flex, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react' 
import { useSearchParams } from 'react-router-dom';

const ProductDetail = () => {
    const [idParams, setIdParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({})

    const id = idParams.get('id')
    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            try {
                let response = await axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
                console.log(response.data.data)
                setProduct(response.data.data)
                setLoading(false)
                console.log(product)
                
            } catch (error) {
                console.log(error)
                setLoading(false)
            }

        }
        fetchData()
    },[])
    if(loading){
        return  <CircularProgress isIndeterminate color='green.300' />
    }
  return (
    <Box 
    display='flex'
    justifyContent='center'
    alignItems='center'
    gap={4}
    m={4}
    p={4}
    flexDirection='column'
    bgColor='gray.400'
    >
        <Heading>Your selected product is here</Heading>
        <Box
        bgColor='red.100'
        p={4}
        borderRadius={8}
        >
        <Image boxSize='250px' src={product.image}/>
        <Text fontSize='4xl'><b>Title: </b>{product.title}</Text>
        <Text fontSize='3xl'><b>Price: </b>{product.price}</Text>
        <Text fontSize='3xl'><b>Brand: </b>{product.brand}</Text>
        <Text fontSize='4xl'><b>Category: </b>{product.category}</Text>
        </Box>
    </Box>
  );
}

export default ProductDetail;
