const CreateTask = ({ addTodo, description, setDescription }) => {

	return(
		<div>
			<form onSubmit={addTodo} >
				<input	
					type='text'
					placeholder="enter a new task..."
					value = {description}
					onChange = { (e) => setDescription(e.target.value) }
					/>
				<button type='submit'>Add Todo</button>
			</form>
		</div>
	)
}

export default CreateTask