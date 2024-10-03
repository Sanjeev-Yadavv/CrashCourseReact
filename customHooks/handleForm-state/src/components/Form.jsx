import React from 'react';
import useHandleForm from '../customHook/useHandleForm';
const Form = () => {

    const {formValues, resetForm, handleChange} = useHandleForm({
        email: "",
        password: ""
    })
    
    function handleSubmit(e){
          e.preventDefault()
           
          console.log('form submitted: ', formValues)
          resetForm()
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={formValues.email} onChange={handleChange} type="email" name='email' placeholder='enter your email' />
        <input value={formValues.password} onChange={handleChange} type="password" name='password' placeholder='enter your password' />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
