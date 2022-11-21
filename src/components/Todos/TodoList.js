import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList(props) {
  const { todos, deleteTodoHandler, toogleTodoHandler } = props
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Список задач пуст</h2>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodoHandler={deleteTodoHandler}
          toogleTodoHandler={toogleTodoHandler}
        />
      ))}
    </div>
  )
}

export default TodoList
