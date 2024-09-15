import React, {useRef} from 'react';

const UncontrolledInput = () => {
const inputValue = useRef('')
const displayValue = useRef('')

function handleChange(){
     const input = inputValue.current.value 

     displayValue.current.innerHTML = input
}

  return (
    <div>
      <h1>display input value without using useState</h1>
      <input type="text"
      placeholder='type here to display under'
      ref={inputValue}
      onChange={handleChange}
      />

      <h2>Value displayed here</h2>
      <div ref={displayValue}></div>
    </div>
  );
}

export default UncontrolledInput;
