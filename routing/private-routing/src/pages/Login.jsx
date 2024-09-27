import React from 'react';
import { Container, Input, Flex } from '@chakra-ui/react';
import { useState, useRef, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../components/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const {login} = useContext(AuthContext)
const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email)
    try {
      let response = await axios({
        method: 'post',
        url: 'https://reqres.in/api/login',
        data: {
          email: email,
          password: password
        }
      })
      login(response.data.token)
      // console.log(response.data.token)
    } catch (error) {
      console.log(error)
    }

    navigate('/product')
  }
  console.log('rerendering')

  return (

    <Flex
      justify='center'
      align='center'

    >
      <Container m={4} maxW={400} >
        <form onSubmit={handleSubmit}>
          <Input ref={emailRef} bgColor='gray.200' m={4} placeholder='enter email' type='email' />
          <Input ref={passwordRef} bgColor='gray.200' m={4} placeholder='enter password' />
          <Input bgColor='gray.200' m={4} type='submit' />
        </form>
      </Container>
    </Flex>

  );
}

export default Login;
