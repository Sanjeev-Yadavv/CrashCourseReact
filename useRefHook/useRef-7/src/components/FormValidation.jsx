import React, { useRef } from 'react';
import { useState } from 'react';

const FormValidation = () => {
    const inputRef = useRef(null)
    const [err, setErr] = useState('')

    function handleChange() {
        const input = inputRef.current.value
        
        if(input.length<5){
            setErr("length of character must be greater than 5")
        }else{
            setErr('')
        }

    }


    return (
        <div>
            <h1>Form validation</h1>
            <input type="text" placeholder='type more than 5 character'
                ref={inputRef}
                onChange={handleChange}
            />

            <p style={{
                color: "red"
            }}>{err}</p>
        </div>
    );
}

export default FormValidation;
