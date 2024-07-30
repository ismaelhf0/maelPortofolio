import { useState } from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)

  const sendEmail = (e) => {
    e.persiste()

    e.preventDefault()

    setIsSubmitting(true)

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_template_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )

      .then((result) => {
        setStateMessage('Message sent!')
        setIsSubmitting(false)

        setTimeout(() => {
          setStateMessage(null)
        }, 5000)
      })
    e.target.reset()
  }

  return (
    <div className="contact-section">
      <h3 className="contact-section-title">Contact</h3>
      <div className="contact-container">
        <div className="form-container">
          <div className="flags-form-container">
            <button className="flags-contact-button">flags</button>
            <button className="flags-contact-button">flags</button>
            <button className="flags-contact-button">flags</button>
            <button className="flags-contact-button">flags</button>
            <button className="flags-contact-button">flags</button>
          </div>
          <form onSubmit={sendEmail}>
            <div className="form-div-contact">
              <label>Name:</label>
              <input type="text" name="user_name" />
            </div>
            <div className="form-div-contact">
              <label>email:</label>
              <input type="email" name="user_email" />
            </div>
            <div className="form-div-contact">
              <label>Your message:</label>
              <textarea
                name="User_message"
                id="message"
                aria-placeholder="write something"
              ></textarea>
            </div>
            <div className="form-div-submit-contact">
              <button
                className="submit-contact-button"
                type="submit"
                value="send"
                disabled={isSubmitting}
              >
                send
              </button>
            </div>
            {stateMessage && <p> {stateMessage}</p>}
          </form>
       
       
       
       
        </div>

        <div className="sideText-container">
          <h3 className="sideText-title">
            Let’s discuss on something cool together
          </h3>

          <div className="info-contact-container">
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />{' '}
                <span>ismail.hajfani@gmail.com</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />{' '}
                <span>+212 6 08 01 64 89</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />{' '}
                <span>Rabat Morroco</span>
              </li>
            </ul>
          </div>

          <div className="social-media-contact-section">
            <ul className="social-media-contact-ul">
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
      </div>
    </div>
  )
}

export default Contact
