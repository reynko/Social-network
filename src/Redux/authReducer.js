import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default :
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const getAuthData = () => {
    return async dispatch => {
        let response = await AuthAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async dispatch => {
        let response = await AuthAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Invalid Email or password"
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const logout = () => {
    return async dispatch => {
        let response = await AuthAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export default authReducer