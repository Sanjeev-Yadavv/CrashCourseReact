import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import './App.css'

function App() {
  const navigate = useNavigate()

  return (
    <>
    <div className='navbar'>
      <button onClick={()=> navigate('/')}>Home</button>
      <button onClick={()=> navigate('/contact')}>Contact</button>
      <button onClick={()=> navigate('/about')}>About</button>
      <button onClick={()=> navigate('/product')}>Product</button>
    </div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
     </Routes>
    </>
  )
}

export default App
