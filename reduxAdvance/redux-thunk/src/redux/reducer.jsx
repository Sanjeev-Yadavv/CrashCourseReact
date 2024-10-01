

export const initState = {
    data : [],
    loading: false,
    error: ""
}

export const reducer = (state = initState, action)=>{
      switch(action.type){
          case 'fetchStart': return(
            {
                ...state, loading: true
            }
          )

          case 'fetchSucceed': return(
            {
                ...state, data: action.payload, loading: false
            }
          )
          case 'fetchFailure': return(
            {
                ...state, error: action.payload, loading: false
            }
          )
          default: return state
      }
}