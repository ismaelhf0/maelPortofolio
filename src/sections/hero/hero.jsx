import { useEffect } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import './hero.scss';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.to(".hero-section", {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        pin: false,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero_section-wrapper">
        <div className="content-hero-wrapper">
          <h1 className="hero-title">Designing & Developing with Passion and Precision</h1>
          <p className="hero-description">
            Discover my journey and projects as a dedicated frontend developer.
          </p>
          <div className="button-wraper">
            <button className="button-primary">
              Learn more
            </button>
            <button className="button">
              Contact me!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
