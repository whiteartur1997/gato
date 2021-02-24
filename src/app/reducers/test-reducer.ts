const initialState = {};
type TestStateType = typeof initialState;

export const testReducer = (state: TestStateType = initialState, action: ActionsType): TestStateType => {
  return state
}

type ActionsType = any;