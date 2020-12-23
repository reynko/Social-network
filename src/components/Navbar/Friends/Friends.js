import React from "react";
import classes from './Friends.module.css'
import Friend from "./Friend/Friend";


const Friends = props => {
    return (
        <div>
            <div className={classes.title}>
                Friends
            </div>
            <div className={classes.wrapper}>
            {props.state.map((friend, index) => {
                return (
                    <Friend
                        key={index}
                        name={friend.name}
                        src={friend.src}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default Friends