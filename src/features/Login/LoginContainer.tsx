import React, {useState} from "react"
import Login from "./Login";
import {useDispatch} from "react-redux";
import {setCheckRem, setEmail, setPassword} from "../../app/reducers/auth-reducer";

const LoginContainer = () => {

  let [inputEmail, setInputEmail] = useState<string>("")
  let [inputPass, setInputPass] = useState<string>("")
  let [checkRem, setInputCheckRem] = useState<boolean>(false)
  let dispatch = useDispatch()

  const signInHandler = () => {
    dispatch(setEmail(inputEmail))
    dispatch(setPassword(inputPass))
    dispatch(setCheckRem(checkRem))

  }

  return <Login
      inputEmail={inputEmail}
      inputPass={inputPass}
      setInputEmail={setInputEmail}
      setInputPass={setInputPass}
      checkRem={checkRem}
      setChekRem={setInputCheckRem}
      onSignInHandler={signInHandler}
  />
}

export default LoginContainer