import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png'


const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={classes.descriptionBlock}>
                    <img alt='' src={userPhoto}/>
                </div>
                <div>
                    <div>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    </div>
                    <div>Looking for a Job: {"props.lookingForAJob"}</div>
                    <div> Description for a Job: {"props.descriptionForAJob"}</div>
                    <div>Full Name: {"props.fullName"}</div>
                    <div>contacts:</div>
                    <div>github: {"props.contacts.github"}</div>
                </div>
            </div>
        )
    }
}


export default ProfileInfo