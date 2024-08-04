import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact.scss'
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Lottie from 'lottie-react'
import Mail from './../../assets/images/lotie/email.json'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)
  const [FormDone, setFormDone] = useState(false) // Set initial state to false
  const [selectedFlags, setSelectedFlags] = useState([])
  const form = useRef()

  const closeFormDone = () => {
    setFormDone(false)
  }

  const handleshowFormDone = () => {
    setFormDone(true)
    console.log(FormDone)
  }

  const handleFlagClick = (flag) => {
    setSelectedFlags((prevFlags) =>
      prevFlags.includes(flag)
        ? prevFlags.filter((f) => f !== flag)
        : [...prevFlags, flag]
    )
    console.log(selectedFlags)
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setStateMessage(null)
    }, 5000)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      setStateMessage('Message sent!')
      handleshowFormDone()
    } catch (error) {
      console.error('Error sending email:', error)
      setStateMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
      form.current.reset()
      setSelectedFlags([]) // Reset the flags selection
    }
  }

  return (
    <div className="contact-section">
      <button onClick={handleshowFormDone}>eeeee</button>
      <h3 className="contact-section-title">Contact</h3>
      <div className="contact-container">
        <div className="sideText-container">
          <h3 className="sideText-title">
            Let’s discuss something cool together
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
                <span>Rabat, Morocco</span>
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
        <div className="form-parent">
          <div className={`form-done-container ${FormDone ? 'active' : ''}`}>
            <div className="form-done-wrapper">
              <div className="form-done-content">
                <p>thank you</p>
                <Lottie
                  className="lottie-animation-mail"
                  loop={true}
                  animationData={Mail}
                />
                <button className="button-primary" onClick={closeFormDone}>
                  send again
                </button>
              </div>
            </div>
          </div>

          <div className={`form-container ${FormDone ? '' : 'active'}`}>
            <h3 className="flag-title">I’m interested in...</h3>
            <div className="flag-form-container-widthController">
              <div className="flags-form-container">
                {['Flag1', 'Flag2', 'Flag3', 'Flag4', 'Flag5'].map((flag) => (
                  <button
                    type="button"
                    key={flag}
                    className={`flags-contact-button ${
                      selectedFlags.includes(flag) ? 'selected' : ''
                    }`}
                    onClick={() => handleFlagClick(flag)}
                  >
                    {flag}
                  </button>
                ))}
              </div>
            </div>

            <form ref={form} name="contactform" onSubmit={sendEmail}>
              <div className="form-div-contact">
                <label>
                  Name:
                  <input type="text" name="user_name" required />
                </label>
              </div>
              <div className="form-div-contact">
                <label>
                  Email:
                  <input type="email" name="user_email" required />
                </label>
              </div>
              <div className="form-div-contact">
                <label>
                  Your message:
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write something"
                    required
                  ></textarea>
                </label>
              </div>
              {selectedFlags.map((flag) => (
                <input
                  className="form-flags-hiden"
                  key={flag}
                  type="hidden"
                  name="interests"
                  value={flag}
                />
              ))}
              <div className="form-div-submit-contact">
                <button
                  className="submit-contact-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send
                </button>
                {stateMessage && <p>{stateMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
