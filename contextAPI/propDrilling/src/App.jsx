import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {
const [todos, setTodos] = useState([])

const addTodo = (newTodo) =>{
  setTodos([...todos, newTodo])
}

const deleteTodo = (id)=>{
  setTodos(todos.filter((el)=>{
    return el.id !==id
  }))
}

  return (
    <>
     <TodoForm addTodo={addTodo} todos={todos}/>
     <TodoList deleteTodo={deleteTodo} todos={todos}/>
     <TodoItem todos={todos}/>
    </>
  )
}

export default App
