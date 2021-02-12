import React, { useState } from 'react'

const AddTaskForm = props => {
	const initialFormState = { id: null, name: ''}
	const [ task, setTask ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setTask({ ...task, id: 0, [name]: value })
	}

	return (
		<form className="addTask"
			onSubmit={event => {
				event.preventDefault()
				if (!task.name) return

			//	console.log(list);

				props.addTask(task)
				setTask(initialFormState)
			
			}}
		>
			<input type="text" name="name" placeholder="Introduce un titulo" value={task.name} onChange={handleInputChange} className="form__input"/>
			<button>Añadir</button>
		</form>
	)
}
export default AddTaskForm
