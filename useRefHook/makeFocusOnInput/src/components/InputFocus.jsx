import React, { useEffect, useRef } from 'react';

const InputFocus = () => {
    const focus = useRef()

   useEffect(()=>{
    focus.current.focus()
   },[])


  return (
    <div>
        <h1>Focus on the input when the component mount</h1>
      <input
       type="text"
       placeholder='focus on this input field'
       ref={focus}
       
       />
    </div>
  );
}

export default InputFocus;
