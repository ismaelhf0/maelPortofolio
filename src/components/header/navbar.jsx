import { NavLink } from 'react-router-dom'
import './navbar.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Switch from './../../components/themeToggle/Switch'
const Navbar = () => {
  const [shownavbar, setshownavbar] = useState(false)
  const handleShowNavbar = () => {
    setshownavbar(!shownavbar)
  }
  const handleClickedNavLink = () => {
    setshownavbar(!shownavbar)
  }

  return (
    <nav className="navbar">
      <div
        className={`blur ${shownavbar && 'active'}`}
        onClick={handleShowNavbar}
      ></div>

      <div className="container">
        <div className="logo">
          <NavLink className="home" to={'/'}>
            <div className="brand-text">
              <div className="logo-container">
              </div>
              Hajfani
              <span className="lastname"> ismail</span>
            </div>
          </NavLink>
        </div>
        <div
          className={`OpenMenuIcon ${shownavbar && 'active'}`}
          onClick={handleShowNavbar}
        >
          <FontAwesomeIcon className="FaMenuIcon" icon={faBars} />
        </div>

        <div
          id="menu"
          className={`nav-elements-container ${shownavbar && 'active'}`}
        >
          <div
            className={`CloseMenuIcon ${shownavbar && 'active'}`}
            onClick={handleShowNavbar}
          >
            <FontAwesomeIcon className="FaCloseIcon" icon={faXmark} />
          </div>

          <ul className="navUl">
            <li>
              <Switch />
            </li>
            <li>
              <NavLink onClick={handleClickedNavLink} to={'/project'}>
                project
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClickedNavLink} to={'/about'}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClickedNavLink} to={'/contact'}>
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
