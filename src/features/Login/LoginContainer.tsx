import React from "react"
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../app/reducers/auth-reducer";
import {AppRootStateType} from "../../app/store";
import {useFormik} from "formik";

const LoginContainer = () => {
    let dispatch = useDispatch()
    let error = useSelector<AppRootStateType, string | null>(state => state.auth.error)
    let authMe = useSelector<AppRootStateType, boolean>(state => state.auth.authMe)


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false,
        },

        onSubmit: (values) => {
            dispatch(login(values.email, values.password, values.remember))
        }
    })

    return <Login
        formik={formik}
        authMe={authMe}
        error={error}
    />
}

export default React.memo(LoginContainer)