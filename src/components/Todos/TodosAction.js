import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosAction.module.css'

function TodosActions(props) {
  const { resetTodosHandler, deleteTodos, completedTodosCount } = props
  return (
    <div className={styles.todosContainer}>
      <Button title={'Обновить'} onClick={resetTodosHandler}>
        <RiRefreshLine />
      </Button>
      <Button
        title={'Удалить'}
        onClick={deleteTodos}
        disabled={!completedTodosCount}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
