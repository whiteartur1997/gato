import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Registration.module.css';
import {useFormik} from 'formik';


/**
 * Validate formik
 * @constructor
 */

type RegistrationFormType = {
    email: string
    password: string
    confirmPassword: string
}
type ErrorRegistrationType = {
    email?: string
    password?: string
    confirmPassword?: string
}

const validate = (values: RegistrationFormType) => {
    const errors: ErrorRegistrationType = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    }

    return errors;
};

export const Registration = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate,
        onSubmit: values => {
            console.log(values);
        },
    });

    return <div className={styles.registrationPage}>

        <h1 className={styles.registrationPage__title}>Registration</h1>

        <div className={styles.registrationPage__registrationBlock}>
            <div className={styles.registrationPage__registrationBlock__error}>'error'</div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    {/*<label htmlFor="email">Email: </label>*/}
                    <input className={styles.registrationPage__registrationBlock__input}
                           type="text"
                           id={'email'}
                           {...formik.getFieldProps('email')}
                           placeholder={'Type Email'}
                    />
                    {formik.touched.email && formik.errors.email ?
                        <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                </div>
                <div>
                    {/*<label htmlFor="pass">Password: </label>*/}
                    <input className={styles.registrationPage__registrationBlock__input}
                           type="password"
                           id={'pass'}
                           {...formik.getFieldProps('password')}
                           placeholder={'Type Password'}
                    />
                    {formik.touched.password && formik.errors.password ?
                        <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                </div>
                <div>
                    {/*<label htmlFor="confirmPass">Confirm Password: </label>*/}
                    <input className={styles.registrationPage__registrationBlock__input}
                           type="password"
                           id={'confirmPass'}
                           {...formik.getFieldProps('confirmPassword')}
                           placeholder={'Confirm Password'}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ?
                        <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div> : null}
                </div>
                <button className={styles.registrationPage__registrationBlock__button}
                    type={'submit'}
                >Sign up</button>
            </form>
            <div>
                <NavLink to={'login'}> login</NavLink>
            </div>
        </div>
    </div>
}