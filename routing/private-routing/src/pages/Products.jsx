import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Heading, Image, Text,Box } from '@chakra-ui/react';

const Products = () => {
  const [data, setData] = useState([])
  useEffect( ()=>{
   async function fetchData () {
      try {
        let response = await axios({
          url: 'https://fakestoreapi.com/products'
        })
        setData( response.data)
        console.log(data)
       } catch (error) {
        console.log(error)
       }
    }
    fetchData()

    return ()=>{

    }
  },[])
  return (<Box>
    <Heading>Here is your Product list</Heading>
    <Grid 
    templateColumns='repeat(4, 1fr)'
    gap={4}
    templateRows='repeat(5,1fr)'
    >
      {
        data?.map((el, i)=>(
          <Container bgColor='gray.200' key={i}>
            <Image src={el.image} boxSize='200px'/>
            <Text fontSize='lg'>Product description: {el.title}</Text>
            <Text fontSize='3xl'>Product Price: {el.price}</Text>
          </Container>
        ))
      }
    </Grid>
    </Box>
  );
}

export default Products;
