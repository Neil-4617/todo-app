// Material UI
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import ClearIcon from '@mui/icons-material/Clear'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'

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
				todos.length === 0 ? (<Typography variant='subtitle' color='text.secondary' >Ready to start the day?</Typography>) : (todos.map(todo=>(
						<CardContent
							key={todo.id}
							sx={{
								display:'flex',
								justifyContent:'center',
							}}
							>
							<Checkbox
								checked={ todo.completed }
								onChange = {()=> toggleComplete(todo.id)}
							/>
							{ 
								todoEditing === todo.id
								? (<TextField
									type= 'text'
									value={editingDescription}
									placeholder = {todo.description}
									onChange={(e)=> setEditingDescription(e.target.value)}/>)
								: ( todo.completed === true  
									? (<Typography  alignSelf='center' sx={{textDecoration:'line-through'}}>{todo.description}</Typography>) 
									: (<Typography alignSelf='center'>{todo.description}</Typography>))
							}
								<IconButton 
									color="error"
									onClick={(e) => handleDelete(todo.id)}>
									<ClearIcon/>		
								</IconButton>
								{ todoEditing === todo.id 
									? <IconButton variant="contained" color="success" onClick={(e) => handleEdit(todo.id)}><KeyboardReturnIcon/></IconButton>
									: <IconButton variant="contained" color="warning" onClick={(e) => setTodoEditing(todo.id)}><EditIcon /></IconButton>
								}
						</CardContent>
					)))
			}

			</Card>
        </>
	)
}

export default TodoList