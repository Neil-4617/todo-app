// Material UI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

const CreateTask = ({ addTodo, formError, description, setDescription }) => {


	return(
		<Box
			component = "form"
			onSubmit ={addTodo}
			display="flex"
			justifyContent="center"
			textAlign= "center"
			padding={2}
			>
				<TextField	
					variant="outlined"
					label="enter a new task..."
					value = {description}
					onChange = { (e) => setDescription(e.target.value) }
					error = {formError}
					helperText={ formError ? "Incorrect Entry." : " "  }
					/>
				<IconButton type='submit' variant='contained' color='primary'><AddIcon /></IconButton>
		</Box>
	)
}

export default CreateTask