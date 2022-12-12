import { useState, useEffect } from "react"

import { Todo } from "./types"
import NewTodoForm from "./components/NewTodoForm"
import TodoItem from "./components/TodoItem"
import "./App.css"
import { TodoList } from "components/TodoList"
import { useAppDispatch, useAppSeclector } from "redux-hooks"
import { addManyTodos, addTodo } from "features/Todo/todoSlice"

function App() {

    const dispatch = useAppDispatch()

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then(res => res.json())
			.then((data: Todo[]) => {
				dispatch(addManyTodos(data))
			})
	}, [])

	return (
		<div className="w-screen min-h-screen h-fit grid grid-cols-[1fr_800px_1fr]">
            <div className="col-start-2 flex flex-col items-center">
                <NewTodoForm />
                <TodoList />
            </div>
		</div>
	)
}

export default App
