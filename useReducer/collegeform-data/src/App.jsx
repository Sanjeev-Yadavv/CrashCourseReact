
import { useReducer, useState } from 'react'
import './App.css'

const initialState = {
  collegeName: "",
  year: "",
  building: "",
  street: "",
  city: "",
  state: "",
  pinCode: "",
  landmark: "",
  course: ""
}
function reducer(state, { type, name, payload }) {
  switch (type) {
    case 'changeInput': return (
      { ...state, [name]: payload }
    )
    case 'changePin': return ({ ...state, [name]: payload })
    case 'clearForm': return initialState
    default: return 'invalid action type'
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [data, setData] = useState({})

  function handleChange(e) {
    dispatch({ type: 'changeInput', name: e.target.name, payload: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: 'clearForm' })
    setData(state)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">College Name:
          <input value={state.collegeName} name='collegeName' onChange={handleChange} type="text" /> <br /></label>
        <label htmlFor="">Establishment Year:
          <input name='year' value={state.year} onChange={handleChange} type="number" /> <br /> </label>
        <label htmlFor="">Adress Details: building-
          <input name='building' value={state.building} onChange={handleChange} type="text" /><br />
          street- <input name='street' value={state.street} onChange={handleChange} type="text" /><br />
          City- <input type="text" name='city' value={state.city} onChange={handleChange} /><br />
          State- <input type='text' name='state' value={state.state} onChange={handleChange} /><br />
          Pin code- <input type="number" name='pinCode' value={state.pinCode} onChange={(e) => dispatch({ type: 'changePin', name: e.target.name, payload: Number(e.target.value) })} /><br />
          Landmark- <input type="text" name='landmark' value={state.landmark} onChange={handleChange} /><br />
        </label>
        <label htmlFor="">Courses offerd:
          <select name="course" value={state.course} onChange={handleChange} id="">
            <option value="">Select your course</option>
            <option value="bcom">Bcom</option>
            <option value="bsc">Bsc</option>
            <option value="mba">Mba</option>
          </select>
        </label>

        <input type="submit" />
      </form>

      <div>
        {
          data.collegeName ? <div>
            <p>college name: {data.collegeName}</p>
            <p>Establish year: {data.year}</p>
            <div>Address detail:
              <p>Building: {data.building}</p>
              <p>street: {data.street} </p>
              <p>city: {data.city}    </p>
              <p>state: {data.state} </p>
              <p>Pin code: {data.pinCode} </p>
              <p>Landmark: {data.landmark} </p>
            </div>
            <p>Course: {data.course} </p>
          </div> :
            <h1>please fill detail first</h1>
        }
      </div>
    </>
  )
}

export default App
