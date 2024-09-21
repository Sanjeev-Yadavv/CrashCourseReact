import React from 'react';
import { createContext, useState } from 'react';

 export const TodoContext = createContext()

const TodoProvider = ({children}) => {
const [todos, setTodos] = useState([])

const addTodo = (newTodo) =>{
    setTodos([...todos, newTodo])
}

const removeTodo = (id) =>{
    setTodos(todos.filter((el)=> el.id !== id))
}

  return (
    <div>
      <TodoContext.Provider value={{todos, addTodo, removeTodo}}>
        {children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;
