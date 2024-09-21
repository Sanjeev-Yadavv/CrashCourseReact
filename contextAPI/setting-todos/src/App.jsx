import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoProvider from "./context/todo"


function App() {


  return (
    <>
    <TodoProvider>
      <TodoForm/>
      <TodoList/>
    </TodoProvider>
    </>
  )
}

export default App
