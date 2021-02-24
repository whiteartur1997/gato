const initialState = {};
type AppStateType = typeof initialState;

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  return state
}

type ActionsType = any;