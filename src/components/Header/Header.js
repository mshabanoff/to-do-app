import classes from './Header.module.css'

import moon from '../../assets/icon-moon.svg'

const Header = () => {
    return (
        // <div className={`${classes.wrapper} ${classes.light}`}>
            <header>
            <h1>TODO</h1>
            <button className={classes.btn}>
                <img src={moon} alt="Dark Theme"/>
            </button>
            </header>
        // </div>
    )
}

export default Header