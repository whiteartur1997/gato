import { NavLink } from "react-router-dom"
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink className={styles.navLink} to="/profile">Profile</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={styles.navLink} to="/registration">Registration</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={styles.navLink} to="/login">Login</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={styles.navLink} to="/new-password">New Password</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={styles.navLink} to="/forgot-password">Forgot Password</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={styles.navLink} to="/test-components">Test</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}