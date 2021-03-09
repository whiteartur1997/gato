import {Dispatch} from "redux"
import {authAPI} from "../../dal/authApi";
import {ProfileStateType, setProfileDataAC} from "./profile-reducer";

type InitialStateType = {
    email: string,
    authMe: boolean,
    error: string | null,
}

let initialState: InitialStateType = {
    email: "",
    authMe: false,
    error: null,
}

export type DispatchActionTypeLogin =
    | ReturnType<typeof setEmail>
    | ReturnType<typeof setAuthMe>
    | ReturnType<typeof setError>
    | ReturnType<typeof setProfileDataAC>;


export const authReducer = (state: InitialStateType = initialState, action: DispatchActionTypeLogin): InitialStateType => {

    switch (action.type) {

        case "SET_EMAIL": {
            return {...state, email: action.email}
        }
        case "SET_AUTH_ME": {
            return {...state, authMe: action.authMe}
        }
        case "SET_ERROR": {

            return {...state, error: action.error}
        }
        default:
            return state
    }

}

export const setEmail = (email: string) => {
    return {
        type: "SET_EMAIL",
        email
    } as const
}

export const setAuthMe = (authMe: boolean) => {
    return {
        type: "SET_AUTH_ME",
        authMe
    } as const
}
export const setError = (error: string | null) => {
    return {
        type: "SET_ERROR",
        error
    } as const
}


export const getAuth = () => {

    return (dispatch: Dispatch<DispatchActionTypeLogin>) => {

        authAPI.auth().then(data => {
            const profileData: ProfileStateType = {
                avatar: data.avatar || "",
                name: data.name,
                created: data.created,
                publicCards: data.publicCardPacksCount
            }
            dispatch(setAuthMe(true));
            dispatch(setProfileDataAC(profileData))
        }).catch(rej => {
            dispatch(setAuthMe(false))
        })


    }
}


export const login = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: Dispatch<DispatchActionTypeLogin>) => {

        authAPI.login(email, password, rememberMe).then(res => {
                const profileData: ProfileStateType = {
                    avatar: res.avatar || "",
                    name: res.name,
                    created: res.created,
                    publicCards: res.publicCardPacksCount
                }
                dispatch(setError(null))
                dispatch(setAuthMe(true))
                dispatch(setEmail(res.email))
                dispatch(setProfileDataAC(profileData))
            }
        ).catch(e => {
            dispatch(setError(e.response.data.error))
        })
    }
}


export const logout = () => {

    return (dispatch: Dispatch<DispatchActionTypeLogin>) => {
        authAPI.logout().then(data => {
            dispatch(setAuthMe(false))
        })


    }
}

