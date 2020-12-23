import React from "react";
import classes from '../Friends.module.css'

const Friend = props => {
    return (
            <div className={classes.friends}>
                <img src={props.src}/>
                <div className={classes.name}>{props.name}</div>
            </div>
    )
}

export default Friend