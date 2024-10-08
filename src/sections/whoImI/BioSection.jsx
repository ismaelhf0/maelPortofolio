import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./BioSection.scss"
import Timeline from "././timeline/Timeline";

function BioSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
          <div className="container-bioSection">
        <div className="text-bioSection">
          section 1
        </div>
        <Timeline />
      </div>
          </div>
          <div className="scroll-section">
         
          <div className="container-bioSection">
        <div className="text-bioSection">
        section 2

        </div>
      </div>          </div>
          <div className="scroll-section">
          <div className="container-bioSection">
        <div className="text-bioSection">
        section 3

        </div>
      </div>          </div>
          <div className="scroll-section">
          <div className="container-bioSection">
        <div className="text-bioSection">
        section 4
        </div>
      </div></div>
        </div>
      </div>
    </section>
  );
}

export default BioSection;