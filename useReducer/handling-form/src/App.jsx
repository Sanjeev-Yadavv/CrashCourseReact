
import { useReducer } from 'react'
import './App.css'
import { useState } from 'react'

const initState = {
  email: "",
  password: ""
}

const reducer = (state, {type,name, payload})=>{
    switch(type){
      case 'changeInput': return (
        {...state, [name]: payload}
      )
      case 'empty': return initState
      default: return state
    }
}

let obj = {}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const [data, setData] = useState({})

 function handleChange(e){
  dispatch({type: 'changeInput', name: e.target.name, payload: e.target.value})
 }
  function handleSubmit(e){
         e.preventDefault()
         dispatch({type: 'empty'})

     setData({
      ...state, email: state.email, password: state.password
     })

  }

  // const {email, password} = state
 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder='enter your email' name='email' value={state.email}
      onChange={handleChange}
      />
      <input type="password" placeholder='enter your password' name='password' value={state.password}
      onChange={handleChange}
      />
      <input type="submit" />
    </form>

    <div>
     {
     data.email?
     <div><p>email: {data.email}</p>
    <p> password: {data.password}</p>
     </div>:
     <div>no user found</div>
     }
    </div>
    </>
  )
}

export default App
