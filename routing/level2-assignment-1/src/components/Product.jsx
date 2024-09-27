import { Box, CircularProgress, Heading, Flex, Image, Text, Center } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { DataFetchContext } from "../context";

const Product = () => {
    const [idParams, setIdParams] = useSearchParams()

    const id = idParams.get('id')

    const { loading, data } = useContext(DataFetchContext)
    console.log(data)
    let filterData = data.filter((ele, i) => {
        return ele.id == id
    })
    // console.log('filter data', filterData)
    let product = {};
    product = filterData[0]

    if (loading) {
        return <CircularProgress isIndeterminate color="green.300" />;
    }
    if (!id) {
        return <Heading textAlign='center' color='red.600' margin={10}>Please Select product first to display its detail...</Heading>
    }

    return <Box>
        <Flex
            flexDirection='column'
            gap={8}
            justify='center'
            align='center'
            margin={8}
        >
            <Heading>
                Here is your Selected Product
            </Heading>

            <Box
                height={300}
                width={300}
                display='flex'
                flexDirection='column'
                gap={4}
            >
                <Image h='100%' W='100%' src={product.image} />
                <Text><b>Title: {product.title}</b></Text>
                <Text><b>Price: </b> {product.price}</Text>
                <Text><b>category: </b> {product.category}</Text>
            </Box>

        </Flex>
    </Box>
}

export default Product;
