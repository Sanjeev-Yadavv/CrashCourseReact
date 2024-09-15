import React, {useState, useRef} from 'react';
import './otp.css'

const OTP = () => {
    const inputLength = 6
    const [otp, setOtp] = useState(new Array(inputLength).fill(''))
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false)
    const inputRefs = useRef([])

const handleChange = (e, index) =>{
        const value = e.target.value
        
        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)
        // console.log(otp)

        if(index<inputLength-1){
            inputRefs.current[index+1].focus()
        }

        validateOtp(newOtp)
    }

    const handleBackspace = (e,index) =>{
         
        if(e.key==='Backspace' && otp[index]==='' && index>0){

            inputRefs.current[index-1].focus()
        }

    }

    const handlePaste = (e) =>{
         const pasteData  = e.clipboardData.getData('text')

         const newOtp = pasteData.slice(0,inputLength).split('')
         setOtp(newOtp)
         newOtp.forEach((el,i)=>{
            if(inputRefs.current[i]){
                inputRefs.current[i].value = el
            }
         })
         validateOtp(newOtp)

    }

    const validateOtp = (otpArray) => {
            const isValid = otpArray.every((el)=> el !== '')
            setIsSubmitEnabled(isValid)
    }

    const handleSubmit = (e) =>{
          e.preventDefault()
          const otpValue = otp.join('')
          console.log('submitted OTP : ', otpValue)
          alert(`OTP is ${otpValue}`)
         otp.forEach((el, i)=>(
            inputRefs.current[i].value = ''
         ))
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input type="number"
                 maxLength={1}
                 onChange={(e)=>handleChange(e,0)}
                 ref={(el)=>(inputRefs.current[0] = el)}
                 onKeyDown={(e)=>handleBackspace(e,0)}
                 onPaste={handlePaste}
                 />
                <input 
                type="number"
                onChange={(e)=>handleChange(e,1)}
                maxLength={1}
                ref={(el)=>(inputRefs.current[1] = el)}
                onKeyDown={(e)=>handleBackspace(e,1)}
                onPaste={handlePaste}
                 />
                <input 
                type="number" 
                maxLength={1} 
                onChange={(e)=>handleChange(e,2)}
                ref={(el)=>(inputRefs.current[2] = el)}
                onKeyDown={(e)=>handleBackspace(e,2)}
                onPaste={handlePaste}
                />
                <input 
                type="number" 
                maxLength={1} 
                onChange={(e)=>handleChange(e,3)}
                ref={(el)=>(inputRefs.current[3] = el)}
                onKeyDown={(e)=>handleBackspace(e,3)}
                onPaste={handlePaste}
                />
                <input 
                type="number" 
                maxLength={1} 
                onChange={(e)=>handleChange(e,4)}
                ref={(el)=>(inputRefs.current[4] = el)}
                onKeyDown={(e)=>handleBackspace(e,4)}
                onPaste={handlePaste}
                />
                <input 
                type="number" 
                maxLength={1} 
                onChange={(e)=>handleChange(e,5)}
                ref={(el)=>(inputRefs.current[5] = el)}
                onKeyDown={(e)=>handleBackspace(e,5)}
                onPaste={handlePaste}
                />
                <button type='submit' disabled={!isSubmitEnabled}>Submit</button>
            </form>
        </div>
    );
}

export default OTP;
