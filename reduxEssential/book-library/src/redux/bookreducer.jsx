import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK, TOOGLE_CHECKBOX } from "./action"

export const initState = {
    books: []
}

export const bookReducer = (state = initState, {type, payload})=>{
    switch(type){
       case ADD_BOOK: return{
        ...state, books: [...state.books, payload]
       }

       case TOOGLE_CHECKBOX: return {
        ...state, books : state.books.map((ele)=>(
            ele.id == payload ? {...ele, isRead: !ele.isRead}: ele
        ))
       }

       case DELETE_BOOK: return {
           ...state, books: state.books.filter((ele)=>{
            return ele.id !== payload
           })
       }

       case EDIT_BOOK: return{
        ...state, books : [...state.books, payload]
       }

        default: return state
    }
}