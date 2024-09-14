import React from 'react';
import { useState } from 'react';

const ToDoList = () => {
const [task, setTask] = useState('')
const [allTask, setAllTask] = useState([])

const handleClick = () =>{
    setAllTask([...allTask, task])
}

  return (
    <div>
      <h2>Simple To Do App</h2>
      <input
       type="text"
       placeholder='enter your work here'
       value={task}
       onChange={(e)=>setTask(e.target.value)}
      />
      <button onClick={handleClick}>Add Work</button>

      <h2>Your todo is here</h2>
      {
        allTask.map((el,index)=>(
            <div key={index}>
                {el}
            </div>
        ))
      }
    </div>
  );
}

export default ToDoList;
