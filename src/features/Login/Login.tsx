import React from "react"
import {NavLink} from "react-router-dom"
import style from "./Login.module.css"
import {FormikValues} from "formik/dist/types";
import {Preloader} from "../../components/Common/Preloader/Preloader";
import {StatusType} from "../../app/reducers/app-reducer";

const Login = (props: LoginPropsType) => {


    return <div className={style.loginContainer}>
        <div className={style.loginContainer__info}>
            {props.status === 'loading' && <Preloader/>}
            {props.status === 'success' && <span className={style.loginContainer__info__success}>Success 😃</span>}
        </div>
        <h1 className={style.loginContainer__title}>Login</h1>
        <form onSubmit={props.formik.handleSubmit}>
            <div className={style.loginContainer__loginBlock}>
                <div>
                    <input className={style.loginContainer__loginBlock__input}
                           id={"email"}
                           name={"email"}
                           type={"email"}
                           placeholder={"Enter email"}
                           value={props.formik.values.email}
                           onChange={props.formik.handleChange}
                    />
                </div>
                <div>
                    <input className={style.loginContainer__loginBlock__input}
                           id={"password"}
                           name={"password"}
                           type={"password"}
                           placeholder={"Enter password"}
                           value={props.formik.values.password}
                           onChange={props.formik.handleChange}
                    />
                </div>
                <div>
                    <input
                        id={"remember"}
                        name={"remember"}
                        type={"checkbox"}
                        checked={props.formik.values.remember}
                        onChange={props.formik.handleChange}/>
                    <span> Remember me</span>
                </div>
                <NavLink to={'/forgot-password'}>Forgot password?</NavLink>

                <div className={style.loginContainer__loginBlock__error}>{props.error}</div>

                <div>
                    <input className={style.loginContainer__loginBlock__button}
                           type="submit"
                           value={"Sign in"}

                    />
                </div>

                <NavLink to={'/registration'}>Registration</NavLink>
            </div>
        </form>
    </div>
}

type LoginPropsType = {
    status: StatusType
    formik: FormikValues
    error: string | null
}

export default Login