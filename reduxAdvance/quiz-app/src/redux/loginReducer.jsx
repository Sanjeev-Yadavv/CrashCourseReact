export const initState = {
    isLogin: false,
    token: null,
    loading: true,
    error: ''
}

export const loginReducer = (state= initState, {type,payload})=>{
    switch(type){
        case 'requestSend': return (
            {
                ...state, loading: true
            }
        )
        case 'requestSuccess': return({
            ...state, isLogin: true, token: payload, loading: false
        })
        case 'requestFail': return({
            ...state, loading: false, error: payload
        })
        case 'reset': return ({
            ...state, token: null
        })
        default: return state
    }
}