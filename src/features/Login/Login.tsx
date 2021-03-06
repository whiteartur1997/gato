import React from "react"
import {NavLink, Redirect} from "react-router-dom"
import style from "./Login.module.css"

const Login = (props: LoginPropsType) => {
    if (props.authMe) return <Redirect to="/profile" />
    return <div className={style.loginContainer}>

        <h1 className={style.loginContainer__title}>Login</h1>

        <div className={style.loginContainer__loginBlock}>
            <div><input className={style.loginContainer__loginBlock__input}
                        type="text"
                        placeholder={"Enter email"}
                        value={props.inputEmail}
                        onChange={(e) => props.setInputEmail(e.currentTarget.value)}
            />
            </div>
            <div><input className={style.loginContainer__loginBlock__input}
                        type="password"
                        placeholder={"Enter password"}
                        value={props.inputPass}
                        onChange={(e) => props.setInputPass(e.currentTarget.value)}
            />
            </div>
            <label>
                <input type="checkbox" checked={props.remember}
                       onChange={(e) => props.setInputRemember(e.currentTarget.checked)}/>
                <span> Remember me</span>
            </label>
            <NavLink to={'/forgot-password'}>Forgot password?</NavLink>
            <div className={style.loginContainer__loginBlock__error}>{props.error}</div>
            <div><input className={style.loginContainer__loginBlock__button}
                        type="submit"
                        value={"Sign in"}
                        onClick={props.onSignInHandler}
            />
            </div>
            <NavLink to={'/registration'}>Registration</NavLink>
        </div>
    </div>
}

type LoginPropsType = {
    inputPass: string
    error: string | null
    setInputPass: (inputPass: string) => void
    inputEmail: string
    setInputEmail: (inputEmail: string) => void
    remember: boolean
    authMe: boolean
    setInputRemember: (remember: boolean) => void
    onSignInHandler: () => void
}

export default Login