import { reducer } from "./reducer";
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'

const actionTypeLogger = (store)=>(next)=>(action)=>{
   console.log("action type logger", action.type)
   return next(action)
}

const payloadLogger = (store)=>(next)=>(action)=>{
    console.log('Action payload', action.payload)
    return next(action)
}

const middlewareEnhancer = applyMiddleware(logger,actionTypeLogger, payloadLogger)
export const store = createStore(reducer, middlewareEnhancer)