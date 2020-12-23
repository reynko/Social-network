import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'How is your react?', likesCount: 11},
        {id: 3, message: 'Very Hard', likesCount: 13},
        {id: 4, message: 'Very Hard', likesCount: 14},
        {id: 5, message: 'Very Hard', likesCount: 15}
    ],
    newPostText: 'Hello i am your friend',
    profile: null,
    lookingForAJob: true,
    descriptionForAJob: '',
    fullName: '',
    contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: ''
    },
    status: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = action.text
            return {
                ...state,
                posts: [...state.posts, {id: 6, message: text, likesCount: 0}],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const addPostCreator = (text) => ({type: ADD_POST, text})
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})
export const setStatus = status => ({type: SET_STATUS, status})
export const deletePost = postId => ({type: DELETE_POST, postId})

export const getUserProfileData = userId => {
    return async dispatch => {
        let response = await ProfileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = userId => {
    return async dispatch => {
        let response = await ProfileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}

export const updateStatus = status => {
    return async dispatch => {
        let response = await ProfileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}


export default profileReducer