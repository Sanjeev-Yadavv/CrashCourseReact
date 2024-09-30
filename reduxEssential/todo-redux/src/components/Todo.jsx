import { Box, Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../redux/action';

const Todo = () => {
const [title, setTitle] = useState('')
const todos = useSelector((state)=> state.todos)
const dispatch = useDispatch()


function handleAddTodo(){
      if(title){
        dispatch(addTodo(title))
      }
      setTitle('')

      console.log(todos)

}

function handleToggle(id){
    dispatch(toggleTodo(id))
}

function handleDelete(id){
    dispatch(deleteTodo(id))
}

  return (
    <Box w='500px'
    m='auto'>
      <Input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='enter your yask here'/>
      <Button onClick={handleAddTodo}>Add Task</Button>

      <Box>
        {
            todos.map((el,i)=>(
                <Box key={i}>
                <Text>Title: {el.title}</Text>
                <Text>Status: {el.status? 'completed': 'not completed'}</Text>
                <Button onClick={()=>handleToggle(el.id)}>{!el.status? 'click for complete': 'completed'}</Button>
                <Button onClick={()=>handleDelete(el.id)}>Delete</Button>
            </Box>
            ))
        }
      </Box>
    </Box>
  );
}

export default Todo;
