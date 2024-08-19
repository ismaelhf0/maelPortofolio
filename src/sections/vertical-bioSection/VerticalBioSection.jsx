import React, { useEffect } from 'react';
import './VerticalBioSection.scss';
import logo_circle from './../../assets/images/Ellipse-logo.png';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/all';

gsap.registerPlugin(ScrollTrigger);

const VerticalBioSection = () => {

  useEffect(() => {
    const containers = gsap.utils.toArray(".container-whoImI");

    containers.forEach((container) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          
          trigger: container,
          pin: false,
          pinSpacing: true,
          scrub: 1,
          
          markers: true, // Set to true for debugging
        }
      });

      // Fade in the container and then fade it out as it scrolls
      tl.fromTo(container, {
        autoAlpha: 0,
        y: 50, // Start with a slight translation
        scale: 0.9,

      }, {
        autoAlpha: 1,
        y: 0, // Move to the original position
        duration: 1, // Smooth fade in
        scale: 1.1,

        ease: "power1.inOut", // Easing for smoother transition
      }).to(container, {
        autoAlpha: 0,
        scale: 0.9,

        y: -50, // Move up slightly as it fades out
        duration: 1, // Smooth fade out
        ease: "power1.inOut", // Easing for smoother transition
      });
    });

    // Clean up on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="about-me-section">
      <div className="container-whoImI">
        <img src={logo_circle} alt="ismail hajfani portrait" />
        <div className="about-me-text">
          Self-taught developer passionate about web apps, with a strong focus on
          UX/UI design and full
        </div>
      </div>

      <div className="container-whoImI">
        <div className="about-me-text">
          I'm driven by a deep curiosity and a relentless pursuit of knowledge..
        </div>
      </div>

      <div className="container-whoImI">
        <div className="about-me-text">
          Self-taught developer passionate about web apps, with a strong focus on
          UX/UI design and full-stack development. 
        </div>
      </div>

      <div className="container-whoImI">
        <div className="about-me-text">
          Skilled in crafting innovative
          solutions and working in Scrum environments.
        </div>
      </div>

      <div className="spacer">x</div>
    </section>
  );
}

export default VerticalBioSection;