import {NavLink} from "react-router-dom"
import {PATH} from "../../components/Routes/Routes"
import styles from './Header.module.css'




const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.header__nav}>
                <ul className={styles.navList}>

                    <NavLink className={styles.navLink} to={PATH.PROFILE}>
                        <li className={styles.navItem}>
                            Profile
                        </li>
                    </NavLink>

                    <NavLink className={styles.navLink} to={PATH.REGISTRATION}>
                        <li className={styles.navItem}>
                            Registration
                        </li>
                    </NavLink>

                    <NavLink className={styles.navLink} to={PATH.LOGIN}>
                        <li className={styles.navItem}>
                            Login
                        </li>
                    </NavLink>

                    <NavLink className={styles.navLink} to={PATH.NEWPASSWORD}>
                        <li className={styles.navItem}>
                            New Password
                        </li>
                    </NavLink>

                    <NavLink className={styles.navLink} to={PATH.FORGOTPASSWORD}>
                        <li className={styles.navItem}>
                            Forgot Password
                        </li>
                    </NavLink>

                    <NavLink className={styles.navLink} to={PATH.TESTCOMPONENTS}>
                        <li className={styles.navItem}>
                            Test
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}



export default Header