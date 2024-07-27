
import './section-one.scss'
import portraitimg from "./../../assets/images/about-img.png"
const About = () => {
  return (
    <section className="about-section">
      <div className="about_section-wrapper">
                <div className="content-about-wrapper">
          <h1 className="about-title">Who Im i ?</h1>

          <p className="about-description">
          I am a curious, self-motivated, adaptable, and problem-solving self-taught developer with a background in 3D aug-
mented reality creation and communication, having studied at College La Salle. My journey into computer science
began at a young age, where I immersed myself in experimenting with servers like Proxmox for homelab uses and
exploring mechatronics with Arduino and Raspberry Pi. My passion for coding ignited during my youth, leading me
to pursue opportunities in the field.
At my first experience with Pepper IO, I was immersed in a dynamic environment, contributing to the development
of various web applications for temporary staffing. Here, I honed my skills in UX/UI design and played a pivotal role
in creating Hortus AR, a mobile app designed for business marketing and augmented reality experiences built with
C# on Unity. Working alongside diverse teams of developers and server administrators, I gained valuable experience
in an organized Scrum environment, fostering both knowledge and a deep-seated commitment to pursuing computer
science.
Driven by curiosity and a thirst for knowledge, my journey as a developer began two years ago right after my
position at pepper io. Since then, I’ve explored and studied various facets of web development, including frontend,
backend, database management, and server administration. The ever-evolving world of web development captivates
me, motivating me to explore how major corporations operate, particularly in Morocco. This curiosity led me to
peek into technologies like Spring Boot and SAP Commerce Cloud (Hybris).
In addition to my technical skills, I have a keen interest in clean code, design patterns, and clean architecture. As
a beginner, I’ve studied these topics, eager to apply best practices and principles to my future development projects.          </p>
          {/*
          <div className="button-wraper">
          
          
          
          <button className= "button-primary">
            Learn more 
          </button>
          <button className= "button">
            Contact me !
          
          
          </button>
                      

          </div>
          */}
        </div>
        

      </div>
      <div className="about-image">
        <img src={portraitimg} alt="portrait-img" />
           </div>
    </section>
  )
}

export default About
