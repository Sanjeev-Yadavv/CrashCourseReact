import { bookReducer } from "./bookreducer";
import { filterReducer } from "./filterReducer";
import {createStore, combineReducers} from 'redux'


const rootStore = combineReducers({
    book: bookReducer,
    filter: filterReducer
})

export const store = createStore(rootStore)