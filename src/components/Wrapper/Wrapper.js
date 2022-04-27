import classes from './Wrapper.module.css'

const Wrapper = (props) => {
    return (
        <div className={`${classes.wrapper} ${classes.light}`}>
            <div className={classes.container}>{props.children}</div>
        </div>
    )
}

export default Wrapper