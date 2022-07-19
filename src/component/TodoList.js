const TodoList = ({todos, handleDelete, handleEdit, toggleComplete, setTodoEditing, todoEditing, setEditingDescription}) => {


	return(	
		<>
		<h2>Todo List</h2>
		<div>
			{
				todos.map((todo)=>
					<div key={todo.id}>
						<div>
							<span> 
								{ 
									todoEditing === todo.id
									? (<input
										type= 'text'
										placeholder = {todo.description}
										onChange={(e)=> setEditingDescription(e.target.value)}/>)
									: (todo.description)

								}				
							</span>
							<span>
								<input
									type = "checkbox"
									checked={todo.completed}
									onChange = {()=> toggleComplete(todo.id)}
								/>
							</span>
							<span>
								<button onClick={(e) => handleDelete(todo.id)}>Delete</button>
							</span>
							<span>
								{ todoEditing === todo.id 
									? <button onClick={(e) => handleEdit(todo.id)}>Submit</button>
									: <button onClick={(e) => setTodoEditing(todo.id)}>Edit</button>
								}
							</span>
						</div>
					</div>
				)
			}
		</div>
		</>
	)
}

export default TodoList