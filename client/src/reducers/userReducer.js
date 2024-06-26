export const registerUserReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST': return {
            loading: true
        }
        case 'USER_REGISTER_SUCCESS': return {
            state: action.payload,
            loading: false,
            success: true
        }
        case "USER_REGISTER_FAILED": return {
            loading: false,
            error: action.payload
        }
        default: return {
            state
        }

    }
}

export const allUserReducer = (state = {}, action) => {
    switch (action.type) {

        case "ALL_USERS_REQUEST": return {
            loading: true
        }

        case "ALL_USERS_SUCCESS": return {
            allUsers: action.payload,
            loading: false,
            success: true
        }

        case "ALL_USERS_FAILED": return {
            loading: false,
            error: action.payload,
            success: false
        }
        case "DELETE_USER" : return{
            ...state,            
            allUsers: state.allUsers.filter(user => user._id !== action.payload)
        }
        default: return state
    }
}

export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {

        case "USER_LOGIN_REQUEST": return {
            loading: true
        }

        case "USER_LOGIN_SUCCESS": return {
            currentUser: action.payload,
            loading: false,
            success: true
        }

        case "USER_LOGIN_FAILED": return {
            loading: false,
            error: action.payload,
            success: false
        }
        case "USER_LOGOUT_SUCCESS": return {
            currentUser: null,
            loading: false,
            success: true
        }
        case "USER_LOGOUT_FAILED": return {
            loading: false,
            error: action.payload,
            success: false
        }

        default: return state

    }
}




