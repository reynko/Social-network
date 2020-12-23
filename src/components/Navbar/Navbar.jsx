import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
// import Friends from "./Friends/Friends";





const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
                </div>
            </div>
                {/*<Friends*/}
                {/*state={props.state}*/}
                {/*/>*/}
        </nav>

    )
}

export default Navbar