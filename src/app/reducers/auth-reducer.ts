type InitialStateType = {
    email: string,
    password: string,
    checkRem: boolean,
}

let initialState: InitialStateType = {
    email: "",
    password: "",
    checkRem: false,
}

export type DispatchActionTypeLogin =
    | ReturnType<typeof setEmail>
    | ReturnType<typeof setPassword>
    | ReturnType<typeof setCheckRem>


export const authReducer = (state: InitialStateType = initialState, action: DispatchActionTypeLogin): InitialStateType => {

    switch (action.type) {

        case "SET_EMAIL": {
            return {...state , email : action.email}
        }
        case "SET_PASSWORD": {
            return {...state , password : action.password}
        }
        case "SET_CHEK_REM": {
            return {...state , checkRem : action.checkRem}
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


