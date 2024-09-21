import { ChakraProvider, Stack } from '@chakra-ui/react'
import HeadingComponent from './components/heading'
import ButtonComponent from './components/buttonComponent'
import InputComponent from './components/InputComponent'
import CardComponent from './components/CardComponent'
function App() {


  return (
    <>
      <ChakraProvider>
       <Stack direction= 'column' align='center' spacing={4}>
       <HeadingComponent />
       <ButtonComponent />
       <InputComponent/>
       <CardComponent/>
       </Stack>
      </ChakraProvider>
    </>
  )
}

export default App
