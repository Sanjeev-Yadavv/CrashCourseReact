
import { Box, Button, Grid, Text, Image, CircularProgress } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { DataFetchContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate()
    const {fetchData, loading, data} = useContext(DataFetchContext)

    useEffect(()=>{
        fetchData()

    },[])

    function handleClick(id){
        navigate(`/product/?id=${id}`)
    }

    if(loading){
     return <CircularProgress isIndeterminate color="green.300" />;
    }
  return (
    <Box>
       <Grid
       templateColumns='repeat(5,1fr)'
       gap={4}
       padding={4}
       >
           {
            data?.map((ele, i)=>(
                <Box
                key={i}
                display='flex'
                flexDirection='column'
                gap={4}
                >
                    <Image src={ele.image}/>
                    <Text><b>Title: {ele.title}</b></Text>
                    <Text><b>Price: </b> {ele.price}</Text>
                    <Button onClick={()=>handleClick(ele.id)}>More Details</Button>
                </Box>
            ))
           }
       </Grid>
    </Box>
  );
}

export default Products;
