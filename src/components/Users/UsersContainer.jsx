import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getFollowed, getUnfollowed, requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../Redux/usersReducer";
import React, {Component} from "react";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../Redux/usersSelectors";
// import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


class UsersContainer extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = page => {
        this.props.getUsers(page, this.props.pageSize)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    : <Users
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        follow={this.props.getFollowed}
                        unfollow={this.props.getUnfollowed}
                        followingProgress={this.props.followingProgress}
                    />}
            </>
        )
    }
}

let mapStateToProps = state => ({
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
})

export default compose(
    // withAuthRedirect,
    connect(
        mapStateToProps, {follow, unfollow,
            setCurrentPage, toggleFollowingProgress,
            getUsers: requestUsers, getFollowed, getUnfollowed}
    )
)(UsersContainer)






