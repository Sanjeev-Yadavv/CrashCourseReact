import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "./action"

export const initState = {
    data: [],
    loading: false,
    error: ''
}

export function fetchReducer(state=initState, {type,payload}){
    switch(type){
        case FETCH_START: return ({
            ...state, loading: true
        })
        case FETCH_SUCCESS: return ({
            ...state, loading: false, data: payload
        })
        case FETCH_FAIL: return({
            ...state, loading: false, error: payload
        })
        default: return state
    }
}