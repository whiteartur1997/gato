import {Dispatch} from 'redux';
import {authAPI, RegistrationDataType} from '../../dal/authApi';

const initialState = {
    error: null as null | string,
    isRegistrationIn:false
};
export type RegistrationStateType = typeof initialState;

export const registrationReducer = (state: RegistrationStateType = initialState, action: ActionsType): RegistrationStateType => {
    switch (action.type) {
        case 'REGISTRATION/SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        case 'REGISTRATION/SET_IS_REGISTRATION_IN':
            return {
                ...state,
                isRegistrationIn: action.value
            }
        default:
            return state;
    }
}

//actions
export const setError = (error: null | string) => {
    return {
        type: 'REGISTRATION/SET_ERROR',
        error
    } as const
}
export const setIsRegistrationIn = (value: boolean) => {
    return {
        type: 'REGISTRATION/SET_IS_REGISTRATION_IN',
        value
    } as const
}
//thunks
export const registration = (values: RegistrationDataType) => (dispatch: Dispatch) => {
    authAPI.registration(values)
        .then(res => {
          dispatch(setIsRegistrationIn(true));
        }).catch(e => {
        dispatch(setError(e.response.data.error));
        setTimeout(() => {
            dispatch(setError(null));
        }, 3000)
    })
}

type ActionsType = ReturnType<typeof setError> | ReturnType<typeof setIsRegistrationIn>;