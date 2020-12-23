import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = props => {
    return (
        <header className={classes.header}>
            <img alt="" src="https://www.squadhelp.com/images/logo/logodesi9/ss.png"/>

            <div className={classes.loginBlock}>
                {props.isAuth ?
                    <div>
                    <div>
                        <img alt="" src="https://www.squadhelp.com/images/logo/logodesi9/ss.png"/>
                        {props.login}
                    </div>
                        <div>
                            <button onClick={props.logout}>Logout</button>
                        </div>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}


export default Header