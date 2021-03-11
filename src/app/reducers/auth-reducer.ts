import {Dispatch} from "redux"
import {authAPI} from "../../dal/authApi";
import {setStatus, SetStatusAC} from "./app-reducer";
import {ProfileStateType, setProfileDataAC} from "./profile-reducer";

type InitialStateType = {
    email: string,
    authMe: AuthMeType,
    error: string | null,
}

export type AuthMeType = "" | "authorized" | "unauthorized";

let initialState: InitialStateType = {
    email: "",
    authMe: "",
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

export const setAuthMe = (authMe: AuthMeType) => {
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

    return (dispatch: Dispatch<DispatchActionTypeLogin | SetStatusAC>) => {
        dispatch(setStatus("loading"))
        authAPI.auth().then(data => {
            const profileData: ProfileStateType = {
                avatar: data.avatar || "",
                name: data.name,
                created: data.created,
                publicCards: data.publicCardPacksCount
            }
            dispatch(setAuthMe("authorized"));
            dispatch(setProfileDataAC(profileData))
            dispatch(setStatus("success"))

        }).catch(e => {
            dispatch(setAuthMe("unauthorized"))
            dispatch(setError(e.response.data.error))
            dispatch(setStatus("error"))
        })


    }
}


export const login = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: Dispatch<DispatchActionTypeLogin | SetStatusAC>) => {
        dispatch(setStatus("loading"))

        authAPI.login(email, password, rememberMe).then(res => {
                const profileData: ProfileStateType = {
                    avatar: res.avatar || "",
                    name: res.name,
                    created: res.created,
                    publicCards: res.publicCardPacksCount
                }
                dispatch(setError(null))
                dispatch(setAuthMe("authorized"))
                dispatch(setEmail(res.email))
                dispatch(setProfileDataAC(profileData))
                dispatch(setStatus("success"))

            }
        ).catch(e => {
            dispatch(setError(e.response.data.error))
            dispatch(setAuthMe("unauthorized"))
            dispatch(setStatus("error"))
        })
    }
}


export const logout = () => {

    return (dispatch: Dispatch<DispatchActionTypeLogin | SetStatusAC>) => {
        dispatch(setStatus("loading"))
        authAPI.logout().then(() => {
            dispatch(setAuthMe("unauthorized"))
            dispatch(setStatus("success"))
        })


    }
}

