import React, {Component} from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileData, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileData(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.Auth.id,
    isAuth: state.Auth.isAuth
})


export default compose(
    connect(mapStateToProps, {getUserProfileData, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)