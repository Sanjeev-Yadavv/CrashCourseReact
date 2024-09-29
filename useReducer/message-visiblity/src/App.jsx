
import { useReducer } from 'react'
import './App.css'

const initialState = {
  isVisible: false
}

const reducer = (state, action)=>{
  switch(action.type){
        case 'toggle': return ({...state, isVisible: !state.isVisible})
        default: return 'type is invalid'
        
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
     <button  onClick={()=> dispatch({type: 'toggle'})}>{state.isVisible? 'hide message': "seen message"}</button>
     {
      state.isVisible? 
      <h2>Hello world</h2>
      :
      <h2></h2>
     }
    </>
  )
}

export default App
