import React from 'react';

const TodoList = ({todos, deleteTodo}) => {
    console.log(todos)
  return (
    <div>
        <h1>List the added todos</h1>
      {
        todos?.map((el,i)=>(
            <div key={i}>
                 <p>Id: {el.id}</p>
                <p>Item: {el.text}</p>
               
                <button onClick={()=>deleteTodo(el.id)}>Remove Todo</button>
            </div>
        ))
      }
    </div>
  );
}

export default TodoList;
