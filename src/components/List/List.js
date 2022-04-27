import classes from './List.module.css'
import Filter from '../Filter/Filter'
// import check from '../../assets/icon-check.svg'
import ListItem from './ListItem'


const List = (props) => {


    return (
        <section className={classes['todo-list']}>
            {/* <ul className={classes.list}>
            {props.tasks.map((task, index) => { return <li className={task.completed && classes.completed} key={index}>
            <div className={classes['fake-checkbox-wrapper']}>
              <span  onClick={() => props.onMarked(index)}  className={classes['fake-checkbox']}><img src={task.completed ? check : null} alt="" /></span>
              </div>
              <p style={{ textDecoration: task.completed ? "line-through" : "" }} onClick={() => props.onMarked(index)}>{task.newTask}</p>
              </li>
            })}
            </ul> */}
            {props.filterType === 'All' && <ListItem  tasks={props.tasks}         onMarked={props.onMarked}/>}
            {props.filterType === 'Active' && <ListItem  tasks={props.activeTasks}         onMarked={props.onMarked}/>}
            {props.filterType === 'Completed' && <ListItem  tasks={props.completedTasks}         onMarked={props.onMarked}/>}
            <Filter 
            tasks={props.tasks}
            onClearCompleted={props.onClearCompleted}
            onAllFilter={props.onAllFilter}
            onActiveFilter={props.onActiveFilter}
            onCompletedFilter={props.onCompletedFilter}
            />
        </section>
    )
}

export default List


/* <li className={classes.completed}>
<div className={classes['fake-checkbox-wrapper']}>
  <span className={classes['fake-checkbox']}><img src={check} alt="" /></span>
</div>
<p>Watch the React Course</p>
</li>

{tasks.map((task, index) => 
  <li key={index} id={index}></li>
    <div className={classes['fake-checkbox-wrapper']}>
      <span className={classes['fake-checkbox']}><img src={check} alt="" /></span>
    </div>
    <p>task</p>
  </li>
)}

{} */