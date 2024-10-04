import { FILTER_AS_READ, FILTER_BY_AUTHOR, FILTER_BY_GENRE, FILTER_BY_TITLE } from "./action"

export const initState = {
    title: '',
    author: '',
    genre: '',
    isRead : ''
}

export const filterReducer = (state = initState, action) => {
    switch (action.type) {

        case FILTER_BY_TITLE: return {
            ...state, title: action.payload
        }
        case FILTER_BY_AUTHOR: return {
            ...state, author: action.payload
        }
        case FILTER_BY_GENRE: return {
            ...state, genre: action.payload
        }

        case FILTER_AS_READ: return {
            ...state, isRead: action.payload
        }
        default: return state
    }
}