import CheckTheme from "./components/CheckTheme"
import ThemeContext from "./context/ThemeContext"
import UserContext from "./context/UserContext"


function App() {
 

  return (
    <>
    <UserContext>
    <ThemeContext>
      <CheckTheme/>
     </ThemeContext>
    </UserContext>
    </>
  )
}

export default App
