import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "93094a5b-5115-4dc2-8c7d-4a054e714c23"
    }
})


export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                console.log(response)
                return response.data
            })
    },
    getUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getFollow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getUserProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return ProfileAPI.getUserProfile(userId)
    }
}



export const ProfileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {
            status: status
        })
    }
}

export const AuthAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email,password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email,password, rememberMe
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
