import { Box, Heading, Input, VStack, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch()
const navigate = useNavigate()


const token = useSelector((state)=> state.login.token)
const error = useSelector((state)=> state.login.error)
const loading = useSelector((state) => state.login.isLoading)

console.log(token)

useEffect(()=>{
    if(token){
        navigate('/quiz')
    }
},[token, navigate])

function handleSubmit(){
    // e.preventDefault()

    let data = {email, password}
     
    dispatch(loginUser(data))
    setEmail('')
  setPassword('')
    
}

function handleError(){
   
  navigate('/')
}
if(error){
   return (
    <Box>
    <Text>{error}</Text>
    <Button onClick={handleError}>Try Again</Button>
</Box>
   )
}

if(loading){
    return <Heading textAlign='center'>Loading...</Heading>
}

  return (
      <Box>
         <Heading textAlign='center'>Please login first to reach quiz page...</Heading>
     
        <VStack w={500} m='50px auto' >
           
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} bg='gray.200' placeholder='enter your email'/>
            <Input value={password} onChange={(e)=>setPassword(e.target.value)} bg='gray.200' placeholder='enter your password'/>
            <Button onClick={handleSubmit} variant='outline' color='teal'>Login</Button>
        </VStack>
      
    </Box>
  );
}

export default Login;
