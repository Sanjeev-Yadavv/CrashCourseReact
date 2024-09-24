import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import User from './components/User'

function App() {


  return (
    <>
      <nav className='navbar'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/users'>
          User
        </Link>
        <Link to='/login'>
          Login
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<User />} />
      </Routes>
    </>
  )
}

export default App
