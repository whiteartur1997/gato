import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Registration.module.css';

export const Registration = () => {
    return <div className={styles.registrationPage}>
        <div className={styles.registrationBlock}>
            <div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id={'email'}/>
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input type="password" id={'pass'}/>
                </div>
                <div>
                    <label htmlFor="confirmPass">Confirm Password: </label>
                    <input type="password" id={'confirmPass'}/>
                </div>
                <button>Sign up</button>
            </div>
            <div>
                <NavLink to={'login'}> login</NavLink>
            </div>
        </div>
    </div>
}