import { createContext , useState } from "react"
import axios from 'axios'

export const DataFetchContext = createContext()

export const DataFetchProvider = ({children}) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async() => {

          try {
            setLoading(true)
            let response = await axios('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
           setData(response.data.data)
           setLoading(false)
          } catch (error) {
            setLoading(false)
            console.log(`error in fetching data in dataFetchProvider ${error}`)
          }
    }


    return <>
    <DataFetchContext.Provider value={{loading, fetchData, data}}>
        {children}
    </DataFetchContext.Provider>
    </>
}
