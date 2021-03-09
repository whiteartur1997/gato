import React, {useCallback, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import styles from './Registration.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {registration, RegistrationStateType} from '../../app/reducers/registration-reducer';
import {AppRootStateType} from '../../app/store';
import {RegistrationForm} from './registrationForm/RegistrationForm';
import {RegistrationDataType} from '../../dal/authApi';
import {StatusType} from "../../app/reducers/app-reducer";
import {Preloader} from "../../components/Common/Preloader/Preloader";
import {PATH} from "../../components/Routes/Routes";

export const Registration = React.memo(() => {
    const dispatch = useDispatch();
    const {isRegistrationIn} = useSelector<AppRootStateType, RegistrationStateType>(state => state.registration);
    const status = useSelector<AppRootStateType, StatusType>(state => state.app.status);

    // const [redirectMode, setRedirectMode] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('unhandledrejection', function (event) {
            console.log(event.reason);
        });
    }, [])

    const registrationHandler = useCallback((values: RegistrationDataType) => {
        dispatch(registration(values))
    }, []);


    if (isRegistrationIn) {
        // setTimeout(()=>setRedirectMode(true), 2000);
        //  if (redirectMode) {
        return <Redirect to={PATH.LOGIN}/>
        // }
    }
    return <>
        {status === 'loading' ? <Preloader/> : <div className={styles.registrationPage}>
            <h1 className={styles.registrationPage__title}>Registration</h1>
            <RegistrationForm registration={registrationHandler}/>
        </div>}
    </>
})