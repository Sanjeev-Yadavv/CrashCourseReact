export const initState = {
    todos : []
}

export function todoReducer(state=initState, {type, payload}){
    switch(type){
        case 'addTodo' : return(
            {
                ...state, todos: [...state.todos, {title: payload, status: false, id: Date.now()},

                ],
            }
        )
        case 'toggleTodo': return (
            {
                ...state, todos: state.todos.map((el,i)=>(
                    el.id === payload? {...el, status: !el.status}:el
                ))
            }
        )
        case 'deleteTodo': return (
            {
                ...state, todos: state.todos.filter((el,i)=>(
                    el.id !== payload
                ))
            }
        )
        default: return state
    }
}