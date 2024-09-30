
export function addTodo(payload){
    return {
        type: 'addTodo',
        payload
    }
}

export function toggleTodo(payload){
    return {
        type: 'toggleTodo',
        payload
    }
}

export function deleteTodo(payload){
    return {
        type: 'deleteTodo',
        payload
    }
}