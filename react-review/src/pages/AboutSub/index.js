import React, {useEffect, useRef} from 'react';
import Header from '../../components/Header';
import gsap from 'gsap'
import './AboutSub.scss'
import woman from '../../Assets/compressed-image.jpg'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    }
  }
}

const letter = {
  initial : {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  }
};


function AboutSub (){
  const timeline_home = gsap.timeline();

  return(
    <>
    <motion.div
      className='single'
      initial = 'initial'
      animate='animate'
      exit='exit'
      >
      <Header timeline={timeline_home} />
      <div className='about-sub'>
      <div className='top-row'>
        <div className='top'>
        <motion.div className='details'>
          <div className='location'>
            <span>28.538336</span>
            <span>81.379234</span>
          </div>
        </motion.div>
        <motion.div className='model'>
          <motion.span className='first' variants={firstName}>
            <motion.span variants={letter}>Y</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>a</motion.span>
          </motion.span>
          <motion.span className='last' variants={lastName}>
          <motion.span variants={letter}>Y</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>a</motion.span>
          </motion.span>
        </motion.div>
      </div>
      </div>
      <div className='bottom-row'>
        <div className='bottom'>
          <motion.div className='image-container-single'>
            <motion.div className='thumbnail-single'>
              <motion.div className='frame-single'>
                <motion.img
                  alt='an image'
                  src={woman}
                >
                
                  </motion.img>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default AboutSub