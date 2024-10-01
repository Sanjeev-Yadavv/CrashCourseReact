import React from 'react'
import { useEffect } from 'react'
import {useSearchParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../redux/action'
import { Box, Grid, Image, Text, CardBody, Stack, Card, Heading, CircularProgress, Select } from '@chakra-ui/react'
import { useState } from 'react'

const CoffeeList = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.data)
    const loading = useSelector((state) => state.loading)
    const error = useSelector((state) => state.error)
    // const [priceParams, setPriceParams] = useSearchParams()
    const [queryParams, setQueryParams] = useState('')

   
  let baseURL =  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`
  
  let URL = queryParams? `${baseURL}${queryParams}`: baseURL
    // console.log(data.data)

    useEffect(() => {
        dispatch(fetchData(URL))
        // console.log('after fetch', data.data)
    }, [dispatch,URL])

    function handleChange(e){
     setQueryParams(`?sort=price&order=${e.target.value}`)

    }

    if (loading) {
        return (<Box w={60} m='100px auto'><CircularProgress isIndeterminate color='green.300' /></Box>)
    }
    if (error) {
        return <Heading>{error}</Heading>
    }

    return (
        <Box>
            <Heading
                textAlign='center'
                m={4}
            >Here is your coffee list...</Heading>

            <label htmlFor="">sort by price: </label>
            <Select  onChange={(e)=>handleChange(e)} w={300} placeholder='Select option'>
                <option value='desc'>high to low</option>
                <option value='asc'>low to high</option>
            </Select>

            <Grid
                templateColumns='repeat(5,1fr)'
                gap={4}
            >
                {
                    data?.map((ele, i) => (
                        <Card key={i} maxW='sm' bgColor='gray.200'>
                            <CardBody>
                                <Image
                                    src={ele.image}
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Title:</Heading>
                                    <Text>
                                        {ele.title}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        ${ele.price}
                                    </Text>
                                </Stack>
                            </CardBody>


                        </Card>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default CoffeeList
