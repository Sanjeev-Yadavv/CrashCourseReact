import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div style={{width: "200px", margin: "auto"}}>
        <h1>Counter</h1>
      <button onClick={()=>setCount(count-1)}>Dec</button>
      <div style={{fontSize: "24px", padding: "10px"}}>{count}</div>
      <button onClick={()=>setCount(count+1)}>Inc</button>
    </div>
  );
}

export default Counter;
