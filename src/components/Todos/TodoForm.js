import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function TodoForm(props) {
  const { addTodoHandler } = props
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  const [startDate, setStartDate] = useState(null)

  const fileReader = new FileReader()
  fileReader.onloadend = () => {
    setImageURL(fileReader.result)
  }

  const handleUpload = (event) => {
    const filesImage = event.target.files[0]
    setFile(filesImage)
    fileReader.readAsDataURL(filesImage)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodoHandler(title, text, file, imageURL, startDate)
    setTitle('')
    setText('')
    setFile(null)
    setImageURL(null)
    setStartDate(null)
  }

  return (
    <div className={styles.todoFormContainer}>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Добавить">
          Добавить
        </Button>
      </form>
      <input
        className={styles.file_loader}
        id="file_loader"
        type="file"
        onChange={handleUpload}
        accept="image/*,.phg,.jpg,.gif"
      />
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        disabledKeyboardNavigation
        placeholderText="Дата окончания задачи"
      />
    </div>
  )
}

export default TodoForm
