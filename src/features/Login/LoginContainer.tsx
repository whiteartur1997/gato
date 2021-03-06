import React, {useState} from "react"
import Login from "./Login";

const LoginContainer = () => {
  let [inputEmail, setInputEmail] = useState<string>("")
  let [inputPass, setInputPass] = useState<string>("")
  let [checkRem, setCheckRem] = useState<boolean>(false)

  const signInHandler = () => {

  }

  return <Login
              inputEmail={inputEmail}
              inputPass={inputPass}
              setInputEmail={setInputEmail}
              setInputPass={setInputPass}
              checkRem={checkRem}
              setChekRem={setCheckRem}
              onSignInHandler={signInHandler}
  />
}

export default LoginContainer