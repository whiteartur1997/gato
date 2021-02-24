import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducers/app-reducer";
import { authReducer } from "./reducers/auth-reducer";
import { profileReducer } from "./reducers/profile-reducer";
import { testReducer } from "./reducers/test-reducer";


const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  test: testReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));