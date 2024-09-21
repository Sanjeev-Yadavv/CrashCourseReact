import React from 'react';
import { useState, useContext } from 'react';
import { TodoContext } from '../context/todo';

const TodoForm = () => {
    const [text, setText] = useState('')
    const {addTodo} = useContext(TodoContext)

    const handleSubmit = (e) => {
       e.preventDefault()
       if(text){
        addTodo({id: Math.random(), text})
        setText('')
       }
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input 
      type="text"
      placeholder='create your task here'
      onChange={(e)=> setText(e.target.value)}
      value={text}
      />
      <button type='submit'>Add todo</button>
    </form>
    </div>
  );
}

export default TodoForm;

