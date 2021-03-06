import React, {useCallback, useState} from "react"
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {login, setCheckRem, setEmail, setPassword} from "../../app/reducers/auth-reducer";
import {AppRootStateType} from "../../app/store";

const LoginContainer = () => {

  let [inputEmail, setInputEmail] = useState<string>("")
  let [inputPass, setInputPass] = useState<string>("")
  let [remember, setInputRemember] = useState<boolean>(false)
  let dispatch = useDispatch()
  let email = useSelector<AppRootStateType, string>(state => state.auth.email)
  let password = useSelector<AppRootStateType, string>(state => state.auth.password)
  let checkRem = useSelector<AppRootStateType, boolean>(state => state.auth.checkRem)
  let error = useSelector<AppRootStateType, string | null>(state => state.auth.error)
  let authMe = useSelector<AppRootStateType, boolean>(state => state.auth.authMe)


  const signInHandler = useCallback(() => {
    debugger
    dispatch(setEmail(inputEmail))
    dispatch(setPassword(inputPass))
    dispatch(setCheckRem(checkRem))
    dispatch(login(email, password, checkRem))
  }, [inputEmail, inputPass, checkRem, email, password, dispatch])

  return <Login

      inputEmail={inputEmail}
      inputPass={inputPass}
      setInputEmail={setInputEmail}
      setInputPass={setInputPass}
      remember={remember}
      setInputRemember={setInputRemember}
      onSignInHandler={signInHandler}
      authMe={authMe}
      error={error}
  />
}

export default React.memo(LoginContainer)