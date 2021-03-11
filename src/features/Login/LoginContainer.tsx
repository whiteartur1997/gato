import React, {useEffect} from "react"
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../app/reducers/auth-reducer";
import {AppRootStateType} from "../../app/store";
import {useFormik} from "formik";
import {setStatus, StatusType} from "../../app/reducers/app-reducer";
import {useHistory} from "react-router-dom";

const LoginContainer = () => {
    let dispatch = useDispatch()
    let error = useSelector<AppRootStateType, string | null>(state => state.auth.error)
    let status = useSelector<AppRootStateType, StatusType>(state => state.app.status)
    let history = useHistory()

    useEffect(() => {
        dispatch(setStatus("idle"))
    }, [])

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false,
        },

        onSubmit: (values) => {
            dispatch(login(values.email, values.password, values.remember))
            if (!error) {
                setTimeout(() => {

                    return history.push('/profile')
                }, 1000)
            }
        }
    })


    return <Login
        status={status}
        formik={formik}
        error={error}
    />
}

export default React.memo(LoginContainer)