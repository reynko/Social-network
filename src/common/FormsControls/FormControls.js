import React from "react";
import classes from './FormControls.module.css'
import {Field} from "redux-form";

const FormControl = ({ meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <textarea  {...props.input} {...restProps}/>
    </FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <input  {...props.input} {...restProps}/>
    </FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
            /> {text}
        </div>
    )
}