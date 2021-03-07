import {useFormik} from "formik";
import InputText from "../../../components/InputText/InputText";
import {useDispatch, useSelector} from "react-redux";
import {sendForgotPasswordRequest} from "../../../app/reducers/password-reducer";
import {AppRootStateType} from "../../../app/store";
import classes from "./ForgotPassword.module.css";

export type ForgotPasswordRequestType = {
    email: string
    from: string
    message: string
}

type FormikErrorType = {
    email?: string
}

export const ForgotPassword = () => {
    const successSent = useSelector<AppRootStateType, boolean>((state) => state.password.successSent);
    const forgotPasswordStatus = useSelector<AppRootStateType, string | null>((state) => state.password.forgotPasswordMessage);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validate: (values) => {

            const errors: FormikErrorType = {};

            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Incorrect email format!";
            }

            return errors;
        },
        onSubmit: (values) => {
            const requestData: ForgotPasswordRequestType = {
                email: values.email,
                from: `test-front-admin <whiteartur1997@gmail.com>`,
                message: `<div style="background-color: lime; padding: 15px">	
            <p>password recovery link: 
	            <a href='http://localhost:3000/gato/#/new-password/$token$'>
	                click
	            </a>
	        </p>    
	    </div>`
            }
            dispatch(sendForgotPasswordRequest(requestData))
        }
    })


    let touched = formik.touched.email ? formik.errors.email : undefined;
    return (<div className={classes.forgotPassword}>
        {
            successSent ?
                <>
                    <p>{forgotPasswordStatus}</p>
                    <p>Click the link in the letter on your email</p>
                </>
                : <>
                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <label htmlFor="email">Email Address</label>
                        <InputText
                            type="email"
                            error={touched && formik.errors.email}
                            {...formik.getFieldProps("email")}
                        />

                        <button type="submit">Send</button>
                    </form>
                    <p>{forgotPasswordStatus}</p>
                </>
        }
    </div>)
}