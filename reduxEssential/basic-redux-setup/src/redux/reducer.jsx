
export const initValue = {
    count: 0
}

export const counterReducer = (state = initValue, {type, payload})=>{

    switch(type){
        case 'increment': return {...state, count: state.count+payload}
        case 'decrement': return {...state, count: state.count-payload}
        default: return state
    }
}