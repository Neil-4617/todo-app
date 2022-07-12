import { useState } from 'react'

const CreateTask = ({ handleSubmit, description, setDescription }) => {

	return(
		<div>
			<form onSubmit={handleSubmit} >
				<input	
					type='text'
					placeholder="enter a new task..."
					value = {description}
					onChange = { (e) => setDescription(e.target.value) }
					/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default CreateTask