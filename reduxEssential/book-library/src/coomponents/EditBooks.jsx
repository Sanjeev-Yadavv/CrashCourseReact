import React ,{useEffect, useState} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Box, Input, Button, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../redux/action';

const EditBooks = () => {
// const [idSearchParams, setIdSearchParams] = useSearchParams()
const [title, setTitle] = useState('')
const [author, setAuthor] = useState('')
const [genre, setGenre] = useState('')
const dispatch = useDispatch()

const book = useSelector((state)=>state.book.books)

const {id} = useParams()
console.log(id)

const selectedBook = book.find((ele)=>ele.id == id)

console.log(selectedBook)

useEffect(()=>{
    if(selectedBook){
        setTitle(selectedBook.title);
        setAuthor(selectedBook.author);
        setGenre(selectedBook.genre);
    }
},[selectedBook])

function handleSubmit(e){
    e.preventDefault()

    let editedBook = {
        ...selectedBook,
        title,
        genre,
        author,
        
    }
   dispatch(editBook(editedBook))
   alert('book edit successfully')
      setAuthor('')
      setGenre('')
      setTitle('')
}

if(!selectedBook){
    return <Heading>Please select book for edit...</Heading>
}

  return (
    <Box
    display='flex'
    flexDirection='column'
    gap={4}
    alignItems='center'
    justifyContent='center'

>
    <Heading textAlign='center'>Edit Your book</Heading>
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
        <Button type='submit' variant='outline' colorScheme='teal'>Edit Book</Button>
    </form>

</Box>
  );
}

export default EditBooks;
