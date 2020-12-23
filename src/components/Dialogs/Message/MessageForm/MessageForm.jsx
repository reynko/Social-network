import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../../../Utilites/Validators/Validator";

const maxLength30 = maxLengthCreator(30)

const AddMessageForm = props => {




    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Text new message'}
                       name={'message'}
                       validate={[required, maxLength30]}
                       component={Textarea}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'messages'
})(AddMessageForm)


export default MessageReduxForm




