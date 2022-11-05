// Material UI
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

// component
import Taskrow from './Taskrow'

// style
import '../styles/App.css'


const TodoList = ({
	todos, 
	handleDelete, 
	handleEdit, 
	toggleComplete, 
	setTodoEditing, 
	todoEditing, 
	setEditingDescription, 
	editingDescription}) => {


	return(
		<>	
			<Card sx={{ padding:'2rem', textAlign:'center' }}>
			<Typography variant="h5" marginBottom= '1rem'>Todo List</Typography>
			{	
				todos.length === 0 ? (
					<Typography 
					variant='subtitle' 
					color='text.secondary'>Ready to start the day?
					</Typography>) : (todos.map(todo=>( 
						<Taskrow 
						key={todo.id} 
						todo={todo}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
						toggleComplete={toggleComplete}
						setTodoEditing={setTodoEditing}
						todoEditing={todoEditing}
						setEditingDescription={setEditingDescription}
						editingDescription={editingDescription}
						/>)))
			}

			</Card>
        </>
	)
}

export default TodoList