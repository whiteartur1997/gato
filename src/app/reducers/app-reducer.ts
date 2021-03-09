export type StatusType = 'idle' | 'loading' | 'success' | 'error';

const initialState = {
    status: 'idle' as StatusType
};
type AppStateType = typeof initialState;

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

//actions
export const setStatus = (status: StatusType) => {
    return {
        type: 'APP/SET-STATUS',
        status
    } as const
}

export type SetStatusAC = ReturnType<typeof setStatus>;
type ActionsType = SetStatusAC;