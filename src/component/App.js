// Maaterial UI
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { useState, useEffect } from 'react'

// style
import '../styles/App.css'

// component
import TodoList from './TodoList'
import CreateTask from './CreateTask'


const App = () => {
  // local storage key
  const LOCAL_STORAGE_KEY = "react-todo-list"

  const localData = ()=> {
    // check data from local storage
    if (localStorage.getItem(LOCAL_STORAGE_KEY)){
      const savedData= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      return savedData || []
    }
  }

  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState(localData)
  const [formError, setFormError] = useState(false)
  const [editingDescription, setEditingDescription] = useState('')
  const [todoEditing, setTodoEditing] = useState('')
  


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  const addTodo =(e) =>{
    e.preventDefault()


    if(description.length !== 0) {

      const newTodo = {
        id: new Date().getTime(),
        description: description,
        completed : false,
      }
      
      setTodos([...todos, newTodo])
      setDescription('')
      setFormError(false)
    }
    else {
      setFormError(true)
    }
  }

  const handleDelete = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const toggleComplete = (id)=> {
    const updatedTodos = [...todos].map((todo)=>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      } 
      return todo
    })
    setTodos(updatedTodos)
  } 

  const handleEdit = (id) => {
    const updatedTodos = [...todos].map((todo)=>{
      if(todo.id === id) {
        if(editingDescription.length !== 0) {
          todo.description = editingDescription
        }
        setEditingDescription(todo.description)
      } 
      return todo
    }) 
    setTodos(updatedTodos)
    setTodoEditing('')
    setEditingDescription('')
  }

  return(
    <Container
      sx={{
        minHeight: '100vh',
        display:'flex',
        justifyContent:"center",
        alingItems: 'center'
      }}>
      <Box
        sx={{
          maxWidth:'80vw',
          minwidth:'30vw',
          margin: 'auto',
          padding: '2rem'
        }}>
          <CreateTask 
            addTodo={addTodo} 
            formError={formError}
            description={description} 
            setDescription={setDescription}  />
            
          <TodoList 
            todos={todos} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit} 
            toggleComplete = {toggleComplete}
            setEditingDescription = {setEditingDescription}
            todoEditing = {todoEditing}
            setTodoEditing = {setTodoEditing}
          />
      </Box>
    </Container>
  )
}
export default App;
