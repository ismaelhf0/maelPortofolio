import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo/logo'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
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
        
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>Phone: +123456789</li>
              <li>Email: youremail@example.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <ul className="social-media">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <div className="footer-bottom">
        <div className="logo">
          <NavLink className="brand-bottom-footer" to={'/'}>

          <Logo />
          </NavLink>
        </div>
          <span>
            &copy; {new Date().getFullYear()} ismail hajfani. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default footer
