import {applyMiddleware, createStore, combineReducers} from 'redux'
import { loginReducer } from './loginReducer'
import { fetchReducer } from './fetchReducer'
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'

const rootStore = combineReducers({
    login: loginReducer,
    quiz: fetchReducer
})

export const store = createStore(rootStore, applyMiddleware(logger,thunk))