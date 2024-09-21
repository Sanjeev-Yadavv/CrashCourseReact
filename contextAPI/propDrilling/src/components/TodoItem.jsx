import React from 'react';

const TodoItem = ({todos}) => {
  return (
    <div>
      <h1>Items of todos</h1>
      {todos?.map((el,i)=>(
<p key={i}>{el.text}</p>
      ))}
    </div>
  );
}

export default TodoItem;
