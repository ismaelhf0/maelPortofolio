import './hero.scss'
import heroImage from './../../assets/images/hero-img2.svg'



const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero_section-wrapper">
                <div className="content-hero-wrapper">
          <h1 className="hero-title">Designing & Developing with Passion and Precision</h1>

          <p className="hero-description">
          Discover my journey and projects as a dedicated frontend developer. With a passion for creating beautiful and functional web applications.
          </p>
          <div className="button-wraper">
          <button className= "button-primary">
            learn more 
          </button>
          <button className= "button">
            Contact me !
          </button>
          </div>
        </div>
        

      </div>
      <div className="hero-image">

          <img src={heroImage} alt="hero" />
        </div>
    </section>
  )
}

export default Hero
