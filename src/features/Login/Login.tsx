import React from "react"
import {NavLink} from "react-router-dom"
import style from "./Login.module.css"

const Login = (props: LoginPropsType) => {
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
                <input type="checkbox" checked={props.checkRem}
                       onChange={(e) => props.setChekRem(e.currentTarget.checked)}/>
                <span> Remember me</span>
            </label>
            <NavLink to={'/forgot-password'}>Forgot password?</NavLink>

            <div><input className={style.loginContainer__loginBlock__button}
                        type="submit"
                        value={"Sign in"}
                        onClick={props.onSignInHandler}
            />
            </div>
        </div>
    </div>
}

type LoginPropsType = {
    inputPass: string
    setInputPass: (inputPass: string) => void
    inputEmail: string
    setInputEmail: (inputEmail: string) => void
    checkRem: boolean
    setChekRem: (checkRem: boolean) => void
    onSignInHandler: () => void
}

export default Login