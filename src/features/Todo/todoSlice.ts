import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo } from "types"

const initialState: Todo[] = []

const todoSlice = createSlice({
	name: "@todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			const newTodo: Todo = {
				id: new Date().toString(),
				title: action.payload,
				completed: false,
			}

			return [newTodo, ...state]
		},
        addManyTodos: (state, action: PayloadAction<Todo[]>) => {
            return [...action.payload]
        },
		toggleTodo: (state, action: PayloadAction<Todo["id"]>) => {
			return state.map(todo =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo
			)
		},
        removeTodo: (state, action: PayloadAction<Todo["id"]>) => {
            return state.filter(todo => todo.id !== action.payload)
        }
	},
})

export default todoSlice.reducer

export const { addTodo, toggleTodo, removeTodo, addManyTodos} = todoSlice.actions
