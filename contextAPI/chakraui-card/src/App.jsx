import {ChakraProvider} from '@chakra-ui/react'
import CardComponent from './components/CardComponent'

function App() {
  
  return (
    <>
      <ChakraProvider>
    <CardComponent/>
  </ChakraProvider>

    </>
  )
}

export default App
