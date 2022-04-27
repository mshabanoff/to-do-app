import classes from './Filter.module.css'

const Filter = (props) => {
    return (
        // <section className={classes['todo-list']}>
            <div className={classes['todo-filter']}>
          <div className={classes['left-items']}>{props.tasks.length} items left</div>
          <div className={`${classes['filter-btn']} ${classes.group}`}>
            <button
              onClick={props.onAllFilter}
              className={`${classes.btn} ${classes.active}`}
            >
              All
            </button>
            <button
              onClick={props.onActiveFilter}
              className={classes.btn}
            >
              Active
            </button>
            <button
              onClick={props.onCompletedFilter}
              className={classes.btn}
            >
              Completed
            </button>
          </div>
          <div className={classes['clear-btn']}>
            <button className={classes.btn} 
            onClick={props.onClearCompleted}
            >
              Clear Completed
            </button>
          </div>
        </div>
        // </section>
    )
}

export default Filter