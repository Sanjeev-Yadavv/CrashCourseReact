

export function increment(payload){
    return {
        type: 'inc',
        payload
    }
}

export function decrement(payload){
    return {
        type: 'dec',
        payload
    }
} 