
import { useReducer } from 'react'
import './App.css'

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

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

 function handleChange(e){
  dispatch({type: 'changeInput', name: e.target.name, payload: e.target.value})
 }
  function handleSubmit(e){
         e.preventDefault()
         dispatch({type: 'empty'})
  }
 
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
    </>
  )
}

export default App
