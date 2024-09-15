import React from 'react';
import {useRef} from 'react'

const FormFocus = () => {
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)

    function handleFocus(input){
        if(input===1){
            input1Ref.current.focus()
        }else{
            input2Ref.current.focus()
        }
    }
  return (

    <div>

        <h2>Focus is based on clicking buttons</h2>
     <input type="text" placeholder='focus on 1' ref={input1Ref} />
     <input type="text" placeholder='focus on 2' ref={input2Ref} />
     <button onClick={()=>handleFocus(1)}>Click to make focus on input 1</button>
     <button onClick={()=>handleFocus(2)}>Click to make focus on input 2</button>
    </div>
  );
}

export default FormFocus;
