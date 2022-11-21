import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'
const dayjs = require('dayjs')

function Todo(props) {
  const { todo, deleteTodoHandler, toogleTodoHandler } = props

  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />

      <div className={styles.todoText}>
        <h5>{todo.title}</h5>
        <p>{todo.text}</p>
        <img src={todo.imageURL} alt="" />
        <p>Окончание задачи: {dayjs(todo.startDate).format('DD/MM/YYYY')}</p>
        <span>
          {dayjs(todo.startDate) < new Date()
            ? 'Вышло время выполнение задачи'
            : ''}
        </span>
      </div>
      <RiDeleteBin2Line
        onClick={() => deleteTodoHandler(todo.id)}
        className={styles.deleteIcon}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toogleTodoHandler(todo.id)}
      />
    </div>
  )
}

export default Todo
