import { removeTodo, toggleTodo } from "features/Todo/todoSlice"
import React, { useRef, useState } from "react"
import { useAppDispatch } from "redux-hooks"
import { Todo } from "../types"

interface TodoItemProps extends Todo {
	style?: React.CSSProperties
}

const TodoItem = ({ id, title, completed, }: TodoItemProps) => {

    const dispatch = useAppDispatch()

	const toggleCompleted = () => {
        dispatch(toggleTodo(id))
    }

    const handleRemove = () => {
        dispatch(removeTodo(id))
    }

	return (
		<li className={`px-4 py-2 rounded-lg shadow-lg flex justify-between gap-4 ${completed ? "bg-gray-300" : "bg-gray-100"}`}>
			<input
				type="checkbox"
				defaultChecked={completed}
				onClick={toggleCompleted}
			/>
			<span className={`w-full text-base ${completed ? "text-gray-600" : "text-gray-800"}`}>{title}</span>
			<span className="text-red-600 cursor-pointer" onClick={handleRemove}>&times;</span>
		</li>
	)
}

export default TodoItem
