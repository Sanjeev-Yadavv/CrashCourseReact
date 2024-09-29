import { useReducer } from 'react'
import './App.css'


const initialState = {
  theme: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'toggle': return { ...state, theme: !state.theme }
  }

}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state.theme)

  return (
    <div
    style={{
      backgroundColor: state.theme? 'black': 'white',
      color: state.theme? 'white': 'black'
    }}
    >
      <h2>toggle the button  to change its theme</h2>
      <button onClick={() => dispatch({ type: "toggle" })}>
        {
          state.theme? 'Dark Mode' : 'Light Mode'
        }
      </button>

    </div>
  )
}

export default App
