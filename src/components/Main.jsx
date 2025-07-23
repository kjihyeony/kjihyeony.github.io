import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Main = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out"
      }
    );

    // Floating elements animation
    gsap.to('.floating-element', {
      y: -30,
      rotation: 360,
      duration: 8,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 3
    });
  }, []);

  return (
    <main className="main" id="home">
      <div className="hero">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        <div className="hero-content">
          <h1 ref={titleRef} className="title">
            UI/Developer
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Main; 