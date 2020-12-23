import React from 'react'
import  classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageReduxForm from "./Message/MessageForm/MessageForm";



const Dialogs = props => {

    let state = props.dialogsPage

    const addNewMessage = (values) => {
            props.sendMessageCreator(values.message)
    }


        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {state.dialogs.map((dialog, index) => {
                        return (
                            <DialogItem
                                key={index}
                                name={dialog.name}
                                id={dialog.id}
                            />
                        )
                    })}
                </div>
                <div className={classes.messages}>
                    {state.messages.map((message, index) => {
                        return (
                            <Message
                                key={index}
                                message={message.message}
                                id={message.id}
                            />
                        )
                    })}
                    <MessageReduxForm
                        onSubmit={addNewMessage}
                    />
                </div>
            </div>
        )
}


export default Dialogs