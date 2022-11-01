import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import gsap from 'gsap'
import Transition from '../../components/Transition';
import './About.scss'
import woman from '../../Assets/compressed-image.jpg'
import {motion} from 'framer-motion'

const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] };

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
    <motion.div
      exit={{opacity: 0}}  
      transition={transition} 
      >
      <Header timeline={timeline_home} />
      <Transition timeline={about}/>
      <div className='about'>
        <h2 className='about-title' ref={abouth2}>About</h2>
        <div className='about-box'>
          <Link to="/about/1">
            <motion.img 
              initial={{}}
              whileHover={{scale: 1.1}} 
              transition={transition}
              className='about-img' src={woman} alt="" />
          </Link>
        </div>
        <motion.div 
          exit={{ opacity: 0 }}
          transition={transition} 
          className='information'>
          <div className='title'>Yasmeen Tariq</div>
          <div className='location'>
            <span>28.55</span>
            <span>-81.493</span>
          </div>
        </motion.div>
      </div>
    </motion.div>

    </>
  )
}
  
export default About