import { useState, useRef, Children } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact.scss'
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)
  const form = useRef()
   const [FormDone, setFormDone] = useState(true)
  const closeShowNavbar = () => { //this is to close 
    setFormDone(!FormDone)
  }
  const handleshowFormDone = () => { // this is to trigger the formDone 
    setFormDone(!FormDone)
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
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      setStateMessage('Message sent!')
      console.log('message sent');
         handleshowFormDone(); // Open the modal on successful email submission
    } catch (error) {
      console.error('Error sending email:', error)
      setStateMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
      e.target.reset()
    }
  }

  return (
    <div className="contact-section">
      <button onClick={handleshowFormDone}>form</button>
      <h3 className="contact-section-title">Contact</h3>
      <div className="contact-container">
        <div className='form-parent' >
          <div className={`form-done-container ${!FormDone && 'active'}`} >
          <div className="form-done-wrapper">
            <div className="form-done-content">
              <p>thank you sending me an email</p>
              <button className='button-primary' onClick={closeShowNavbar} >try again</button>

            </div>
          </div>



          </div>



        <div className={`form-container ${FormDone && 'active'}`}>

          <div className="flags-form-container">
            <button className="flags-contact-button">Flags</button>
            <button className="flags-contact-button">Flags</button>
            <button className="flags-contact-button">Flags</button>
            <button className="flags-contact-button">Flags</button>
            <button className="flags-contact-button">Flags</button>
          </div>
          <form ref={form} name="contactform" onSubmit={sendEmail}>
            <div className="form-div-contact">
              <label>
                Name:
                <input type="text" name="user_name" />
              </label>
            </div>
            <div className="form-div-contact">
              <label>
                Email:
                <input type="email" name="user_email" />
              </label>
            </div>
            <div className="form-div-contact">
              <label>
                Your message:
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write something"
                ></textarea>
              </label>
            </div>
            <div className="form-div-submit-contact">
              <button
                className="submit-contact-button"
                type="submit"
                disabled={isSubmitting}
              >
                Send
              </button>
             { {stateMessage} && <p>{stateMessage}</p>}
            </div>
          </form>
          </div>





        </div>

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
      </div>
    </div>
  )
}

export default Contact
