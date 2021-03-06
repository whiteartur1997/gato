import {NavLink} from "react-router-dom"
import {PATH} from "../../components/Routes/Routes"
import styles from './Header.module.css'

export const Header = () => {
  return (
      <div className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <div className={styles.header}>
              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  <li className={styles.navItem}>
                    <NavLink className={styles.navLink} to={PATH.PROFILE}>Profile</NavLink>
                  </li>
                  <li className={styles.navItem}>
                    <NavLink className={styles.navLink} to={PATH.REGISTRATION}>Registration</NavLink>
                  </li>
                  <li className={styles.navItem}>
                    <NavLink className={styles.navLink} to={PATH.LOGIN}>Login</NavLink>
                  </li>
                  <li className={styles.navItem}>
                    <NavLink className={styles.navLink} to={PATH.NEWPASSWORD}>New Password</NavLink>
                  </li>
                  <li className={styles.navItem}>
                    <NavLink className={styles.navLink} to={PATH.FORGOTPASSWORD}>Forgot Password</NavLink>
                  </li>
                  <li className={styles.navItem}>
                    <NavLink className={styles.navLink} to={PATH.TESTCOMPONENTS}>Test</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </ul>
        </nav>
      </div>
  )
}