import { useState } from 'react'

// style
import '../styles/App.css'

// component
import TodoList from './TodoList'
import CreateTask from './CreateTask'

const App = () => {
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState(
      [
        {
          id: 1,
          description: "walk the earth",
          completed: false
        },
        {
          id: 2,
          description: "cook meal",
          completed: false
        },
        {
          id: 3,
          description: "15 mins excercise",
          completed: false
        }
      ]
    )
  
  const [editingDescription, setEditingDescription] = useState(null)
  const [todoEditing, setTodoEditing] = useState('')

  const handleSubmit =(e) =>{
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      completed : false
    }

    setTodos([...todos].concat(newTodo))
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
          handleSubmit={handleSubmit} 
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
