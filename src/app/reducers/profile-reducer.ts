const initialState = {
    name: null as string | null,
    publicCards: null as number | null,
    avatar: null as string | null,
    created: null as Date | null
}

export type ProfileStateType = typeof initialState;

export const profileReducer = (state: ProfileStateType = initialState, action: ActionsType): ProfileStateType => {
    switch (action.type) {
        case "SET-PROFILE-DATA":
            return {
                ...action.data
            }
        default:
            return state
    }
}

export const setProfileDataAC = (data: ProfileStateType) => ({type: 'SET-PROFILE-DATA', data} as const);

type ActionsType = ReturnType<typeof setProfileDataAC>;