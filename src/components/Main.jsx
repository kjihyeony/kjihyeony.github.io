import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeScene from './ThreeScene';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const mainRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const main = mainRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    // 모든 문자들을 정적으로 표시
    const allChars = title.querySelectorAll('.title-char');

    gsap.set(allChars, { 
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0
    });

    gsap.set(subtitle, { opacity: 1, y: 0 });

    // 스크롤 감지
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = main.offsetHeight;
      const scrollProgress = scrollTop / heroHeight;
      
      setScrollProgress(scrollProgress);
      
      if (scrollProgress > 0.3) {
        setIsScrolled(true);
        main.classList.add('scrolled');
      } else {
        setIsScrolled(false);
        main.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 스크롤에 따른 텍스트 움직임만
    ScrollTrigger.create({
      trigger: main,
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);
        if (progress > 0.3) {
          setIsScrolled(true);
          main.classList.add('scrolled');
        } else {
          setIsScrolled(false);
          main.classList.remove('scrolled');
        }
      },
      animation: gsap.timeline()
        .to([allChars], {
          y: -30,
          scale: 0.9,
          duration: 1,
          ease: "power2.inOut"
        })
        .to(subtitle, {
          y: -20,
          scale: 0.95,
          opacity: 0.8,
          duration: 1,
          ease: "power2.inOut"
        }, "-=1")
        .to([allChars], {
          y: -80,
          scale: 0.7,
          opacity: 0.6,
          duration: 1,
          ease: "power2.inOut"
        })
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderTitle = (text, isFirstLine = false) => {
    return text.split('').map((char, index) => {
      return (
        <span 
          key={index} 
          className="title-char"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section className={`main ${isScrolled ? 'scrolled' : ''}`} ref={mainRef}>
      {/* Three.js 배경 */}
      <ThreeScene scrollProgress={scrollProgress} />
      
      <div className="hero">
        <div className="hero-content">
          <h1 className="title" ref={titleRef}>
            <div className="title-line">
              {renderTitle("UI", true)}
            </div>
            <div className="title-line">
              {renderTitle("Develope")}
            </div>
          </h1>
          <p className="subtitle" ref={subtitleRef}>
            Creative & Interactive Experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main; 