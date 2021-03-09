import React from 'react';
import {Redirect} from 'react-router-dom';
import styles from './Registration.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {registration, RegistrationStateType} from '../../app/reducers/registration-reducer';
import {AppRootStateType} from '../../app/store';
import {RegistrationForm} from './registrationForm/RegistrationForm';
import {RegistrationDataType} from '../../dal/authApi';

export const Registration = () => {
    const dispatch = useDispatch();
    const {isRegistrationIn} = useSelector<AppRootStateType, RegistrationStateType>(state => state.registration);

    const registrationHandler = (values: RegistrationDataType) => {
        dispatch(registration(values))
    }

    if (isRegistrationIn) {
        return <Redirect to={'login'}/>
    }
    return <div className={styles.registrationPage}>
        <h1 className={styles.registrationPage__title}>Registration</h1>
        <RegistrationForm registration={registrationHandler}/>
    </div>
}