import { Box, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/action';

const AddBooks = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const dispatch = useDispatch()
    const book = useSelector((state)=>state.book.books)
    // console.log(book)

   async function handleSubmit(e) {
        e.preventDefault()

        let newbook = {
            id: Date.now(),
            isRead: false,
            title,
            author,
            genre
        }
        dispatch(addBook(newbook))
      setAuthor('')
      setGenre('')
      setTitle('')
      alert("Book added successfully")
      console.log(book)
    }
    return (
        <Box
            display='flex'
            flexDirection='column'
            gap={4}
            alignItems='center'
            justifyContent='center'

        >
            <form style={{
                width: '400px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                margin: '30px'
            }} onSubmit={handleSubmit} >
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='enter your book title' />
                <Input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='author name' />
                <Input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder='genre of book' />
                <Button type='submit' variant='outline' colorScheme='teal'>Add Book</Button>
            </form>

        </Box>
    );
}

export default AddBooks;
