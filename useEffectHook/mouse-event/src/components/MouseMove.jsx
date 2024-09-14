import React from 'react';
import { useState,useEffect } from 'react';


const MouseMove = () => {
const [mouseCordination, setMouseCordination] = useState({x: 0, y:0})



const mouseMovement=(event)=>{
   setMouseCordination({x: event.clientX, y: event.clientY})
   console.log(`x: ${event.clientX}, y: ${event.clientY}`)
}

useEffect(()=>{
    window.addEventListener('mousemove', mouseMovement)
   
    return ()=>{
        window.removeEventListener('mousemove', mouseMovement)
    }
},[])

  return (
    <div>
      <div>
      <p>Mouse Position: X - {mouseCordination.x}, Y - {mouseCordination.y}</p>
    </div>
    </div>
  );
}

export default MouseMove;
