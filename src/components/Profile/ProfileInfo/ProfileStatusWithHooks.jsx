import React, {useEffect, useState} from "react";



const ProfileStatusWithHooks = props => {

        let [editMode, setEditMode] = useState(false)
        let [status, setStatus] = useState(props.status)

        useEffect(() => {
            setStatus(props.status)
        }, [props.status])

        const activateMode = () => {
            setEditMode(true)
        }

        const deactivateEditMode = () => {
            setEditMode(false)
            props.updateStatus(status)
        }

        const onStatusChange = event => {
            setStatus(event.target.value)
        }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status || "--"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       value={status}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                />
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks