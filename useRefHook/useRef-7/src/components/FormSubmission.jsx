import React ,{useRef} from 'react';

const FormSubmission = () => {
    const textRef = useRef(null)
    const numRef = useRef(null)

    function handleSubmit(e){
        e.preventDefault()

        const data = {
            text: textRef.current.value,
            num: numRef.current.value
        }

        if(data.text.length>0 && data.num.length>0){
            console.log('form submitted', data)
        }else{
            console.log('please fill empty fields')
        }
    }
  return (
    <div>
        <h2>Form submission and validation</h2>
      <form onSubmit={handleSubmit}>
        <input ref={textRef} type="text" placeholder='enter your name' />
        <input ref={numRef} type="number" placeholder='enter your age in years' />
        <input type="submit" />
        
      </form>
    </div>
  );
}

export default FormSubmission;
