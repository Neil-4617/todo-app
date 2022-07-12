

const TodoList = ({todos}) => {
	return(
		<>
		<h2>Todo List</h2>
		<div> 
			{
				todos.map((todo)=><div key={todo.id}>{todo.description}</div>)
			}
		</div>
		</>
	)
}

export default TodoList