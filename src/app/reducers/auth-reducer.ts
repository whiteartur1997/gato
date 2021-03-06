import {Dispatch} from "redux"
import {authAPI} from "../../dal/authApi";

type InitialStateType = {
    email: string,
    password: string,
    checkRem: boolean,
    authMe: boolean,
    error: string | null,
}

let initialState: InitialStateType = {
    email: "",
    password: "",
    checkRem: false,
    authMe: false,
    error: null,
}

export type DispatchActionTypeLogin =
    | ReturnType<typeof setEmail>
    | ReturnType<typeof setPassword>
    | ReturnType<typeof setCheckRem>
    | ReturnType<typeof setAuthMe>
    | ReturnType<typeof setError>


export const authReducer = (state: InitialStateType = initialState, action: DispatchActionTypeLogin): InitialStateType => {

    switch (action.type) {

        case "SET_EMAIL": {
            return {...state, email: action.email}
        }
        case "SET_PASSWORD": {
            return {...state, password: action.password}
        }
        case "SET_CHEK_REM": {
            return {...state, checkRem: action.checkRem}
        }
        case "SET_AUTH_ME": {
            return {...state, authMe: action.authMe}
        }
        case "SET_ERROR": {
            debugger
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


export const setPassword = (password: string) => {
    return {
        type: "SET_PASSWORD",
        password
    } as const
}


export const setCheckRem = (checkRem: boolean) => {
    return {
        type: "SET_CHEK_REM",
        checkRem
    } as const
}

export const setAuthMe = (authMe: boolean) => {
    return {
        type: "SET_AUTH_ME",
        authMe
    } as const
}
export const setError = (error: string) => {
    return {
        type: "SET_ERROR",
        error
    } as const
}


export const getAuth = () => {

    return (dispatch: Dispatch<DispatchActionTypeLogin>) => {

        return authAPI.auth().then(data => {

            if (!data.error) {
                dispatch(setAuthMe(true))
            }

        })


    }
}


export const login = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: Dispatch<DispatchActionTypeLogin>) => {

        authAPI.login(email, password, rememberMe).then(res => {
                    dispatch(setAuthMe(true))
                    console.log(res)
            }
        ).catch(e => {
            console.log('Error: ', {...e})
            dispatch(setError(e.response.data.error))
        })
    }
}


export const logout = () => {

    return (dispatch: Dispatch<DispatchActionTypeLogin>) => {

        authAPI.logout().then(data => {

            if (!data.error) {
                dispatch(setAuthMe(false))

            }


        })


    }
}

