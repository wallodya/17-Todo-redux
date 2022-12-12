import React from "react"
import { useAppSeclector } from "redux-hooks"
import TodoItem from "./TodoItem"

export const TodoList = () => {
	const todos = useAppSeclector(state => state.todos)

	return (
        <div className="flex flex-col gap-4 mt-4 list-none">
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />
                ))
            }
        </div>
    )
}
