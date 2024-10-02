import axios from 'axios'
export const FETCH_START = 'fetchStart'
export const FETCH_SUCCESS = 'fetchSuccess'
export const FETCH_FAIL = 'fetchFail'


export function loginUser(data){
    return async(dispatch)=>{
          dispatch({type: 'requestSend', })
          try {
            let response = await axios({
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: data
            })
            dispatch({type: 'requestSuccess', payload: response.data.token})
          } catch (error) {
            dispatch({type: 'requestFail', payload : error.message})
          }
    }
}

export function fetchQuiz(URL){
    return async (dispatch)=>{
        dispatch({type: FETCH_START})
        try {
            let response = await axios({
                method: 'get',
                url: URL
            })
            dispatch({type: FETCH_SUCCESS, payload: response.data.data})
        } catch (error) {
            dispatch({type: FETCH_FAIL, payload: error.message})
        }
    }
}

export function resetToken(){
      return {
        type: 'reset'
      }
}