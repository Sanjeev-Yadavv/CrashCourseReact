import { Box, Grid, Heading, Text, Checkbox, Flex, Button, Input, Select, } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, filterByAuthor, filterByGenre, filterByReadbasis, filterByTitle, toggleCheckBox } from '../redux/action';
import { useNavigate } from 'react-router-dom';


const SeeBooks = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let book = useSelector((state) => state.book.books)
    const { title, author, genre, isRead } = useSelector((state) => state.filter)
    console.log(book)

    const filteredBooks = book.filter((ele, i) => {

        const filterTitle = title === '' || ele.title.toLowerCase().includes(title.toLowerCase())
        const filterAuthor = author === '' || ele.author.toLowerCase().includes(author.toLowerCase())
        const filterGenre = genre === '' || ele.genre.toLowerCase().includes(genre.toLowerCase())
        const filterRead = isRead === 'all' || (isRead === 'read' && ele.isRead) || (isRead === 'unread' && !ele.isRead);

        return filterAuthor && filterTitle && filterGenre && filterRead;
    })

    function handleChangeCheckBox(id) {
        dispatch(toggleCheckBox(id))
    }

    function handleDelete(id) {
        dispatch(deleteBook(id))
    }

    function handleEdit(id) {
        navigate(`/editBook/${id}`)
    }

    function handleTitleChange(e) {
        dispatch(filterByTitle(e.target.value))
    }
    function handleAuthorChange(e) {
        dispatch(filterByAuthor(e.target.value));
    }

    function handleGenreChange(e) {
        dispatch(filterByGenre(e.target.value));
    }

    function handleSelectChange(e){
          dispatch(filterByReadbasis(e.target.value))
    }
    if (book < 1) {
        return <Heading>Please add book to display here...</Heading>
    }
    return (
        <Box>
            <Heading textAlign='center'>Your book list...</Heading>
            <Input onChange={handleTitleChange} placeholder='search your book by title' />
            <Input onChange={handleAuthorChange} placeholder='search your book by author' />
            <Input onChange={handleGenreChange} placeholder='search your book by genre' />

            <Select onChange={handleSelectChange} placeholder='All'>
                
                <option value='read'>Read</option>
                <option value='unread'>Unread</option>
            </Select>
            <Grid
                templateColumns='repeat(3,1fr)'
                gap={8}
                m={20}
            >
                {
                    filteredBooks?.map((ele, i) => (
                        <Box key={i}>
                            <Text textDecoration={ele.isRead ? 'line-through' : 'none'}>Book Name: {ele.title}</Text>
                            <Text textDecoration={ele.isRead ? 'line-through' : 'none'}>Book Author: {ele.author}</Text>
                            <Text textDecoration={ele.isRead ? 'line-through' : 'none'}>Genre: {ele.genre}</Text>
                            <Flex gap={10}>
                                <Checkbox isChecked={ele.isRead} onChange={() => handleChangeCheckBox(ele.id)}>Read</Checkbox>
                                <Button onClick={() => handleDelete(ele.id)} variant='outline' colorScheme='teal'>Delete</Button>
                                <Button onClick={() => handleEdit(ele.id)} variant='outline' colorScheme='teal'>Edit Book</Button>
                            </Flex>
                        </Box>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default SeeBooks;
