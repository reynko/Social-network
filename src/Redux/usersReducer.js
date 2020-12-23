import {UsersAPI} from "../api/api";
import {updateObjectInArray} from "../Utilites/objectHelper";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS'


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} )
                /*state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })*/
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = userId => ({type: FOLLOW, userId})
export const unfollow = userId => ({type: UNFOLLOW, userId})
export const setUsers = users => ({type: SET_USERS, users})
export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, page})
export const setUsersTotalCount = totalCount => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: FOLLOWING_PROGRESS, isFetching, userId})


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const requestUsers = (page, pageSize) => {
    return async dispatch => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await UsersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
        console.log(data)
    }
}
export const getUnfollowed = (userId) => {
    return async dispatch => {
        await followUnfollowFlow(dispatch, userId,UsersAPI.getUnfollow.bind(UsersAPI), unfollow)
    }
}
export const getFollowed = (userId) => {
    return async dispatch => {
        await followUnfollowFlow(dispatch, userId, UsersAPI.getFollow.bind(UsersAPI), follow)
    }
}


export default usersReducer
