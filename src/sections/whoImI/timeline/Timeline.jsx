import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Timeline.scss';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    title: 'Design School',
    date: '09/2017',
    status: 'Started Design Studies',
    isComplete: true,
  },
  {
    title: 'First Job',
    date: '06/2019',
    status: 'Entered Workforce',
    isComplete: true,
  },
  {
    title: 'Pepper IO',
    date: '03/2021',
    status: 'Web Application Development & Hortus AR',
    isComplete: true,
  },
  {
    title: 'Self-Taught Developer',
    date: '01/2022',
    status: 'Started Coding Journey',
    isComplete: true,
  },
  {
    title: 'Freelance Web Development',
    date: '08/2022',
    status: 'Focused on Website Builders',
    isComplete: true,
  },
  {
    title: 'open to work',
    date: 'Present',
    status: 'looking for a new adventure ✨',
    isComplete: true,
  },
];

const Timeline = () => {
  const [items, setItems] = useState(timelineData);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // GSAP animation with ScrollTrigger
      gsap.fromTo(
        containerRef.current.querySelectorAll('.title'),{
          y: -200, // Start from -200px to the left
          opacity: 0,
        },
        {
          y: 0, // End at the original position
          opacity: 1,
          duration: 1.5,
          stagger: 0.3, // Stagger animation for each title
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Trigger the animation when the top of the element is 80% down the viewport
            end: "bottom 20%", // Animation ends when the bottom of the element is 20% from the top of the viewport
            toggleActions: "play none none none", // Plays animation when entering the viewport
          },
        }
      );
    }
  }, [items]);

  const toggleComplete = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const lastCompleteIndex = newItems.map(item => item.isComplete).lastIndexOf(true);

      if (lastCompleteIndex >= 0 && lastCompleteIndex < newItems.length - 1) {
        newItems[lastCompleteIndex + 1].isComplete = true;
      } else if (lastCompleteIndex === newItems.length - 1) {
        newItems[lastCompleteIndex].isComplete = false;
      }

      return newItems;
    });
  };

  return (
    <div className="timelineContainer" ref={containerRef}>
      <ul className="timeline">
        {items.map((item, index) => (
          <li key={index} className={`li ${item.isComplete ? 'complete' : ''}`}>
            <div className="timestamp">
              <span className="title">{item.title}</span>
              <span className="date">{item.date}</span>
            </div>
            <div className="status">
              <h4>{item.status}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
