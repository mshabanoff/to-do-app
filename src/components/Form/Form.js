import classes from './Form.module.css'
import { useState } from 'react'

const Form = (props) => {

  const [newTask, setNewTask] = useState('')

  const newTaskHandler = (event) => {
    setNewTask({
      newTask: event.target.value,
      completed: false
    })
  }

  const submitNewTaskHandler = (event) => {
    // event.preventDefault()
    if(newTask.newTask !== '') props.onAdd(newTask)
    setNewTask({
      newTask: '',
      completed: false
    })
  }

  const onKeyDownHandler = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault()
      submitNewTaskHandler()
    }
  }

    return (
        <section className={classes['form-control']}>
        <div className={classes['fake-checkbox-wrapper']}>
          <span onClick={submitNewTaskHandler} className={classes['fake-checkbox']}></span>
        </div>
        <form>
          <input
            onKeyDown={onKeyDownHandler}
            onChange={newTaskHandler}
            type="text"
            value={newTask.newTask}
            name="todo-form-input"
            className={classes['todo-form-input']}
            placeholder="Create a new todo..."
          />
          <button className={classes['todo-form-button']} type="submit">
            Add
          </button>
        </form>
      </section>
    )
}

export default Form