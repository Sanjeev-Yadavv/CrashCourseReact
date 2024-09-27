import { Box, Image, Text, Button, CircularProgress, Flex, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Retrieving filters from URL
  let filter = searchParams.get('filter') || 'all';
  let order = searchParams.get('order') || 'all';
  let sort = searchParams.get('sort') || 'all'; // changed 'price' to 'sort' to reflect URL accurately

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let query = '';

        // Adding category filter if not 'all'
        if (filter !== 'all') {
          query += `category=${filter}&`;
        }else{
             // Adding sort and order filters
        if (sort !== 'all') {
            query += `sort=${sort}&`; // adjust as per API requirements, e.g., sortBy=price
          }
          if (order !== 'all') {
            query += `order=${order}&`; // usually works with sort, e.g., order=asc
          }
        }

       

        // Fetching data from the API
        let response = await axios.get(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?${query}`
        );
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, [filter, order, sort]);

  function handleFilterChange(e) {
    const { name, value } = e.target;
    const currentParams = Object.fromEntries([...searchParams]);
    currentParams[name] = value; // Updating the search params with new filter values
    setSearchParams(currentParams);
  }

  function handleClick(id) {
    navigate(`/seeMore?id=${id}`);
  }

  if (loading) {
    return <CircularProgress isIndeterminate color="green.300" />;
  }

  return (
    <Box>
      <Flex>
        <Box>
          <label htmlFor="category">Sort by category</label>
          <select name="filter" value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="homedecor">Home Decor</option>
          </select>
        </Box>

        <Box>
          <label htmlFor="sort">Sort by price</label>
          <select name="sort" value={sort} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="price">Price</option>
          </select>
        </Box>

        <Box>
          <label htmlFor="order">Order</label>
          <select name="order" value={order} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </Box>
      </Flex>

      <Grid templateColumns="repeat(5, 1fr)" gap={4} padding={4}>
        {data.map((ele, i) => (
          <Box
            key={i}
            bgColor="green.100"
            display="flex"
            flexDirection="column"
            justify="center"
            alignItems="center"
            padding={2}
            borderRadius="8px"
            gap={2}
          >
            <Image src={ele.image} alt={ele.title} />
            <Text>Price: {ele.price}</Text>
            <Text>Title: {ele.title}</Text>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => handleClick(ele.id)}
            >
              More Details
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
