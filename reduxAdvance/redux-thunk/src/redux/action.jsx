// import {useDispatch} from 'react-redux'

export function fetchData(URL){
    return (
       async (dispatch)=>{

        dispatch({type: 'fetchStart'})
        try {

            let response = await fetch(URL)
            let data = await response.json()
            console.log(data)
            
            dispatch({type: 'fetchSucceed', payload: data})
            
        } catch (error) {
            dispatch({type: 'fetchFailure', payload: error.message})
        }

        }
    )
}