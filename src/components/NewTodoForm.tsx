import { ADDRCONFIG } from "dns"
import { addTodo } from "features/Todo/todoSlice"
import { FormEvent, useRef } from "react"
import { useAppDispatch } from "redux-hooks"

const NewTodoForm = () => {
	const inputRef = useRef<HTMLInputElement | null>(null)

    const dispatch = useAppDispatch()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (!inputRef.current) return
        dispatch(addTodo(inputRef.current.value))
        inputRef.current.value = ""
    }

	return (
		<form onSubmit={handleSubmit} className="w-full px-8 py-4 mt-4 bg-gray-600 rounded-lg shadow-lg flex gap-4 ">
			<input
				type="text"
                name="todoText"
				placeholder="new todo"
				ref={inputRef}
				className="px-5 py-2 w-full bg-transparent text-gray-100 border-b border-b-gray-400"
			/>
			<input
                type="submit"
                value="Add todo"
                className="px-5 py-2 rounded text-white whitespace-nowrap border border-white hover:bg-white hover:text-gray-800"
            />
		</form>
	)
}

export default NewTodoForm
