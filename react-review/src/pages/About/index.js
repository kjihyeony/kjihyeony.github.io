import React, {useEffect, useRef} from 'react';
import Header from '../../components/Header';
import gsap from 'gsap'
import Transition from '../../components/Transition';
import './About.scss'


function About() {

  const timeline_home = gsap.timeline();
  const about = gsap.timeline();
  const abouth2 = useRef(null);

  useEffect(()=>{
    about.from(abouth2.current,{
      duration: .6,
      skewX: 20,
      x: -100,
      opacity: 0
    },"+=0.3")
  })

  return (
    <>
      <Header timeline={timeline_home} />
      <Transition timeline={about}/>
      <div className='about'>
        <h2 className='about-title' ref={abouth2}>About</h2>
      </div>
    </>
  )
}

export default About