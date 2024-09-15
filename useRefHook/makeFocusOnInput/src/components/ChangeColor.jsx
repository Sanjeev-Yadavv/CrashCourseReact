import React ,{useRef}from 'react';

const ChangeColor = () => {

    const colorRef = useRef(null)
    function ChangeColor () {
           colorRef.current.style.backgroundColor = "red"
    }
  return (
    <div>
      <div 
      onClick={ChangeColor}
      ref={colorRef}
      style={{margin: "30px",height: "200px", width: "200px", border: "2px solid red"}}
      >click here to change its color</div>
    </div>
  );
}

export default ChangeColor;
