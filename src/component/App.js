import { useState, useEffect } from 'react'

// style
import '../styles/App.css'

// component
import TodoList from './TodoList'
import CreateTask from './CreateTask'


const App = () => {
  // local storage key
  const LOCAL_STORAGE_KEY = "react-todo-list"

  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState(()=> {
    const savedData= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(savedData){
      return savedData || ''
    }
  })
  const [editingDescription, setEditingDescription] = useState(null)
  const [todoEditing, setTodoEditing] = useState('')
  


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  const addTodo =(e) =>{
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      completed : false
    }

    setTodos([newTodo, ...todos])
    setDescription('')
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
        todo.description = editingDescription
      } 
      return todo
    }) 
    setTodos(updatedTodos)
    setTodoEditing('')
    setEditingDescription(null)
  }

  return(
    <div className="container">
      <div className="wrapper">
        
        <CreateTask 
          addTodo={addTodo} 
          description={description} 
          setDescription={setDescription}  />

        <div className="tasklist">
          
          <TodoList 
            todos={todos} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit} 
            toggleComplete = {toggleComplete}
            setEditingDescription = {setEditingDescription}
            todoEditing = {todoEditing}
            setTodoEditing = {setTodoEditing}
          />

        </div>
      </div>
    </div>
  )
}
export default App;
