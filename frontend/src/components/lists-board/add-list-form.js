import React, { useState } from 'react'

const AddListForm = props => {
	const initialFormState = { id: null, name: ''}
	const [ list, setList ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setList({ ...list, id: 3, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!list.name) return

			//	console.log(list);

				props.addList(list)
				setList(initialFormState)
			
			}}
		>
			<input type="text" name="name" value={list.name} onChange={handleInputChange} />
			<button>Añadir Lista</button>
		</form>
	)
}
export default AddListForm
