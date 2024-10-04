export const ADD_BOOK = 'ADD_BOOK'
export const TOOGLE_CHECKBOX = 'TOGGLE_CHECKBOX'
export const DELETE_BOOK = 'DELETE_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'
export const FILTER_BY_TITLE = 'FILTER_BY_TITLE'
export const FILTER_BY_AUTHOR = 'FILTER_BY_AUTHOR'
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const FILTER_AS_READ = 'FILTER_AS_READ'

export function addBook(book){
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export function toggleCheckBox(payload){
    return {
        type: TOOGLE_CHECKBOX,
        payload
    }
}

export function deleteBook(payload){
    return{
        type: DELETE_BOOK,
        payload
    }
}

export function editBook(payload){
    return {
        type: EDIT_BOOK,
        payload
    }
}

export function filterByTitle(payload){
    return {
        type: FILTER_BY_TITLE,
        payload
    }
}

export function filterByAuthor(payload){
    return {
        type: FILTER_BY_AUTHOR,
        payload
    }
}

export function filterByGenre(payload){
    return {
        type: FILTER_BY_GENRE,
        payload
    }
}
    export function filterByReadbasis(payload){
        return {
            type: FILTER_AS_READ,
            payload
        }
}

