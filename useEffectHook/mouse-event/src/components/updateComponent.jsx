import React, { useEffect, useState } from 'react'

const UpdateComponent = () => {
    const [count,setCount] = useState(0)
    const [title,setTitle] = useState("Default Title")

    useEffect(()=>{
        document.title = `you clicked ${count} times`

        console.log("document title updated")
    },[count])
  return (
    <div>
      <h2>title updater</h2>
      <p>click the button to update the document title:</p>
      <button onClick={()=> setCount(count+1)}>Click me</button>
    </div>
  )
}

export default UpdateComponent
