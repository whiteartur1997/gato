import {Dispatch} from "redux";
import {authApi} from "../../api/auth-api";
import {ForgotPasswordRequestType} from "../../features/password/ForgotPassword/ForgotPassword";

const initialState = {
    successSent: false as boolean,
    forgotPasswordMessage: null as null | string
}
type ActionsType = ReturnType<typeof forgotPasswordMessageAC>
    | ReturnType<typeof forgotPasswordSentStatusAC>;
type InitialStateType = typeof initialState;

export const passwordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FORGOT-PASSWORD-MESSAGE":
            return {...state, forgotPasswordMessage: action.message};
        case "FORGOT-PASSWORD-SUCCESS-SENT-STATUS":
            return {...state, successSent: action.sent}
        default:
            return state;
    }
}


export const sendForgotPasswordRequest = (requestData: ForgotPasswordRequestType) => async (dispatch: Dispatch) => {
    let res;
    try {
        res = await authApi.forgotPassword(requestData);
        if (res.status === 200) {
            if (res.data.info) {
                dispatch(forgotPasswordMessageAC(res.data.info))
                dispatch(forgotPasswordSentStatusAC(true))
            }
        }
    } catch (err) {
        dispatch(forgotPasswordMessageAC(err.response.data.error))
    }
}

// actions
const forgotPasswordMessageAC = (message: null | string) => ({type: "FORGOT-PASSWORD-MESSAGE", message} as const);
const forgotPasswordSentStatusAC = (value: boolean) => ({type: "FORGOT-PASSWORD-SUCCESS-SENT-STATUS", sent: value} as const);