import classes from './ListItem.module.css'
import check from '../../assets/icon-check.svg'

const ListItem = (props) => {
    return (
        <ul className={classes.list}>
        {props.tasks.map((task, index) => { return <li className={task.completed && classes.completed} key={index}>
        <div className={classes['fake-checkbox-wrapper']}>
          <span  onClick={() => props.onMarked(index)}  className={classes['fake-checkbox']}><img src={task.completed ? check : null} alt="" /></span>
          </div>
          <p style={{ textDecoration: task.completed ? "line-through" : "" }} onClick={() => props.onMarked(index)}>{task.newTask}</p>
          </li>
        })}
        </ul> 
    )
}

export default ListItem