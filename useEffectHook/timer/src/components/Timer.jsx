import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Timer = () => {

    const [count, setCount] = useState(0)

    


    useEffect(()=>{
      let timerId =  setInterval(()=>{
            setCount(prevCount=> prevCount+1)
        },1000)
        console.log("start")

        return ()=>{
            clearInterval(timerId)
            console.log("end")
        }
    },[])


  return (
    <div>
      <h2>Timer</h2>
      <div>{count}</div>
    </div>
  );
}

export default Timer;
