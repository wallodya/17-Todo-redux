import { combineReducers, configureStore, createStore, Store } from "@reduxjs/toolkit";
import todoReducer from "./features/Todo/todoSlice"

const rootReducer = combineReducers({
    todos: todoReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
