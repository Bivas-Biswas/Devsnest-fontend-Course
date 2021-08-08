import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import thunk from "redux-thunk";
import { logger } from "redux-logger/src";
import usersReducers from './UsersSlice'

const rootReducer = combineReducers({
    counter: counterSlice,
    users: usersReducers
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger]
})