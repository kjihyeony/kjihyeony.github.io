import React, {useEffect, useRef, useState} from 'react';
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

const letter = {
  initial : {
    y: 400,
  },
  animate: {
    y: 0, 
    transition: { duration: 1, ...transition },
  }
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


const AboutSub = ({imageDetails}) => {
  const timeline_home = gsap.timeline();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);


  const [canScroll, setCanScroll] = useState(false);

  useEffect( ()=>{
    if(canScroll === false){
      document.querySelector("body").classList.add("no-scroll");
    }else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  },[canScroll] )

  return(
    <>
    <motion.div
      onAnimationComplete={ () => setCanScroll(true) }
      className='single'
      initial = 'initial'
      animate='animate'
      exit='exit'
      >
      <Header timeline={timeline_home} />
      <div className='about-sub'>
      <div className='top-row'>
        <div className='top'>
        <motion.div 
          initial = {{ opacity: 0, y: 20}}
          animate={{
            opacity:1,
            y:0,
            transition: {delay: 1.25, ...transition}
          }}
          className='details'>
          <div className='location'>
            <span>28.538336</span>
            <span>81.379234</span>
          </div>
        </motion.div>
        <motion.div className='model'>
          <motion.span className='first' variants={firstName}>
            <motion.span variants={letter}>Y</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>s</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>n</motion.span>
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
          <motion.div className='image-con tainer-single'>
            <motion.div 
              initial = {{
                y: '-50%',
                width: imageDetails.width, 
                height: imageDetails.height,
              }}
              animate = {{
                y:0,
                width:'100%',
                height: window.innerWidth > 1440 ? 800 : 500,
                transition:{ delay:0.2, ...transition}
              }}
              className='thumbnail-single'>
              <motion.div className='frame-single'>
                <motion.img
                  style={{ scale: scale}}
                  initial = {{scale: 1.1}}
                  animate = {{
                    transition: {delay: 0.2, ...transition},
                    y: window.innerWidth > 1440 ? -1200: -600,
                  }}
                  alt='an image'
                  src={woman}
                >
                  </motion.img>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div>
            box<br />
            box<br />
            box<br />
            box<br />
            box<br />
            box<br />
          </div>
          <div style={{marginTop: "40px"}}>
            box<br />
            box<br />
            box<br />
            box<br />
            box<br />
            box<br />
          </div>
         <div style={{marginTop: "140px"}}>
            box<br />
            box<br />
            box<br />
            box<br />
            box<br />
            box<br />
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
};

export default AboutSub;