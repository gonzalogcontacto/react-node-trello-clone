import React, { useState } from 'react'

const AddTaskForm = props => {
	const initialFormState = { id: null, name: ''}
	const [ task, setTask ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setTask({ ...task, id: 0, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!task.name) return

			//	console.log(list);

				props.addTask(task)
				setTask(initialFormState)
			
			}}
		>
			<input type="text" name="name" value={task.name} onChange={handleInputChange} />
			<button>Añadir Tarea</button>
		</form>
	)
}
export default AddTaskForm
