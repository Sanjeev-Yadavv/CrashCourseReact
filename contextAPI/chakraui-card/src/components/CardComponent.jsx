import React from 'react';
import { Card, Image, CardHeader, Heading, CardFooter, Textarea, Stack } from '@chakra-ui/react'

const CardComponent = () => {
    return (
        <div>
            <Stack
            align='center'
            gap={4}
            margin={4}
            >
                <Card
                    direction={{ base: 'column', sm: 'column' }}
                    overflow='hidden'
                    variant='outline'
                    align='center'
                    borderRadius={20}
                    bg='gray.50'
                    boxShadow='dark-lg'
                    w={{base: '200px', md: '300px', lg: '500px'} }
                >
                    <CardHeader>
                        <Heading fontSize={{base: '15px', md: '25px', lg: '30px'}}>
                            This is a beautiful image
                        </Heading>
                    </CardHeader>
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '300px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <CardFooter>
                        <Textarea w={{base: '200px', md: '300px', lg: '500px'}} placeholder='Write about the above image...' />
                    </CardFooter>

                </Card>
            </Stack>

        </div>
    );
}

export default CardComponent;
