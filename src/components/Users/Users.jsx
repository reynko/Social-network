import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";


const Users = props => {
    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
            {props.users.map(user => {
                return (
                <User
                    key={user.id}
                    user={user}
                    followingProgress={props.followingProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
                )})}
        </div>
    )
}

export default Users