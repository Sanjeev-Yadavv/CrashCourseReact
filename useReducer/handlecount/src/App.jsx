
import { useReducer } from 'react'
import './App.css'


const initialState = {
  count: 0
}

const reducer = (state, action)=>{
    switch(action.type){
      case 'inc': return {...state, count: state.count+1};
      case 'dec': return {...state, count: state.count-1};
    }
}

function App() {
const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <button onClick={()=> dispatch({type: 'inc'})}>
        Inc
      </button>
      <div>{state.count}</div>
      <button onClick={()=> dispatch({type: 'dec'})}>Dec</button>
    </>
  )
}

export default App
