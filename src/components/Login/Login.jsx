import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormControls";
import {required} from "../../Utilites/Validators/Validator";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from '../../common/FormsControls/FormControls.module.css'


const Login = props => {

    const LogIn = (data) => {
        props.login(data.email, data.password, data.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={LogIn}/>
        </div>
    )
}


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField('Email', 'email', [required], Input)}
                {createField('Password', 'password', [required], Input, {type: 'password'})}
                {createField('', 'remember me', [], Input, {type: 'checkbox'}, "remember me")}
            {error && <div className={classes.formError}>{error}</div>}

            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const mapStateToProps = state => {
    return {
        isAuth: state.Auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login)