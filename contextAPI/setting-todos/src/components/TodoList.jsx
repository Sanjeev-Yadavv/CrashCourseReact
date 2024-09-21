import React from 'react';
import { TodoContext } from '../context/todo';
import { useContext } from 'react';


const TodoList = () => {
  const {todos, removeTodo} = useContext(TodoContext)

  return (
    <div>
      {
        todos.map((el)=>(
            <div>
                <p>{el.text}</p>
                <p>{el.id}</p>
                <button onClick={()=>removeTodo(el.id)}>Delete</button>
            </div>
        ))
      }
    </div>
  );
}

export default TodoList;