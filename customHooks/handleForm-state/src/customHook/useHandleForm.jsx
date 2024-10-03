import React, { useState } from 'react';

const useHandleForm = (initialValue) => {
    const [formValues, setFormValues] = useState(initialValue)

    const handleChange=(e)=>{
         const {name, value} = e.target;
         setFormValues({
          ...formValues, [name]: value ,
         })
    }

    const resetForm = ()=>{
      setFormValues(initialValue)
    }

  return (
    {
         formValues,
         handleChange,
         resetForm
    }
  );
}

export default useHandleForm;
