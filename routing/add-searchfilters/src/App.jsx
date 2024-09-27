import {Link, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import { Flex } from '@chakra-ui/react'

function App() {
  

  return (
    <>
    <Flex align='center' justify='space-around' padding={4} bgColor='gray.200'>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link>
      
    </Flex>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/seeMore' element={<ProductDetail/>}/>
      </Routes>
    </>
  )
}

export default App
