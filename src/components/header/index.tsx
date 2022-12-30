import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './styles.css'
import logo from './images/logo.png'
import loginPage from './images/loginPage.png'
import { links } from 'helpers/links'
import { linksNotLogin } from 'helpers/linksNotLogin'
import { UserContext } from 'contexts/userContext'
import { AuthorizedUser } from './authorizedUser'

export const Header = () => {
  const { isAuthenticated } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <nav>
        {
          isAuthenticated
            ? <ul className={styles.list}>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={`/${link.value}`} className={styles[`${link.value}`]}>{link.text}</Link>
                </li>
              ))}
            </ul>
            : <ul className={styles.list}>
              {linksNotLogin.map((link, index) => (
                <li key={index}>
                  <Link to={`/${link.value}`} className={styles[`${link.value}`]}>{link.text}</Link>
                </li>
              ))}
            </ul>
        }
      </nav>
      {
        isAuthenticated
          ? <AuthorizedUser />
          : <div className={styles.loginPanel}>
            <img src={loginPage} alt="login page" />
            <Link to="/">Sign In</Link>
            <span>/</span>
            <Link to="/signUp">Sign Up</Link>
          </div>
      }
    </header>
  )
}
