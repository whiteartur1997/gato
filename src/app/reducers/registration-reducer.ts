import {Dispatch} from 'redux';
import {authAPI, RegistrationDataType} from '../../dal/authApi';
import {setStatus, SetStatusAC} from './app-reducer';

const initialState = {
    error: null as null | string,
    isRegistrationIn: false
};
export type RegistrationStateType = typeof initialState;

export const registrationReducer = (state: RegistrationStateType = initialState, action: RegistrationActionsType): RegistrationStateType => {
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
export const registration = (values: RegistrationDataType) => async (dispatch: Dispatch<RegistrationActionsType | SetStatusAC>) => {
    dispatch(setStatus('loading'));
    try {
        await authAPI.registration(values);
        dispatch(setIsRegistrationIn(true));
        dispatch(setStatus('success'));
    } catch (e) {
        if (e.response) {
            dispatch(setError(e.response.data.error));
            dispatch(setStatus('error'));
            setTimeout(() => {
                dispatch(setError(null));
            }, 3000);
        } else {
            dispatch(setError(e.message));
            dispatch(setStatus('error'));
            setTimeout(() => {
                dispatch(setError(null));
            }, 3000);
        }
    }
}

type RegistrationActionsType = ReturnType<typeof setError> | ReturnType<typeof setIsRegistrationIn>;