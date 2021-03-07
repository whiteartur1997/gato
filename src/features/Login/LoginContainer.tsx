import React, {useCallback, useState} from "react"
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../app/reducers/auth-reducer";
import {AppRootStateType} from "../../app/store";

const LoginContainer = () => {

    let [inputEmail, setInputEmail] = useState<string>("")
    let [inputPass, setInputPass] = useState<string>("")
    let [remember, setInputRemember] = useState<boolean>(false)
    let dispatch = useDispatch()
    let error = useSelector<AppRootStateType, string | null>(state => state.auth.error)
    let authMe = useSelector<AppRootStateType, boolean>(state => state.auth.authMe)


    const signInHandler = useCallback(() => {

        dispatch(login(inputEmail, inputPass, remember))
    }, [inputEmail, inputPass, remember, dispatch])

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