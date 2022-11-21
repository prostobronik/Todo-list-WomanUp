import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosAction'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (title, text, file, imageURL, startDate) => {
    const newTodo = {
      title: title,
      text: text,
      file: file,
      startDate: startDate,
      imageURL: imageURL,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toogleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Менеджер задач</h1>
      <TodoForm addTodoHandler={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodosHandler={resetTodosHandler}
          deleteTodos={deleteCompletedTodosHandler}
          completedTodosCount={!!completedTodosCount}
        />
      )}
      {completedTodosCount > 0 && (
        <h2>{`Вы завершили ${completedTodosCount} ${
          completedTodosCount > 1 ? 'задачи ' : 'задачу'
        }`}</h2>
      )}
      <TodoList
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
        toogleTodoHandler={toogleTodoHandler}
      />
    </div>
  )
}

export default App
