
import './App.css'
import useToggleItems from './customHook/useToggle'
import useToggle from './customHook/useToggle'

function App() {
  const [state, toggleState] = useToggleItems(["A", "B", "C"],2)
  

  return (
    <>
    your array of state is {state} <br />
    <button onClick={toggleState}>toggle state</button>
    </>
  )
}

export default App
