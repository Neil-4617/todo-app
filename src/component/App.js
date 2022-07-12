import { useState } from 'react'

// style
import '../styles/App.css'

// component
import TodoList from './TodoList'
import CreateTask from './CreateTask'

const App = () => {
  const [todos, setTodos] = useState([])
  const [description, setDescription] = useState('')
  


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

  return(
    <div className="container">
      <div className="wrapper">
        <CreateTask handleSubmit={handleSubmit} description={description} setDescription={setDescription}  />
        <div className="tasklist">
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  )
}
export default App;
