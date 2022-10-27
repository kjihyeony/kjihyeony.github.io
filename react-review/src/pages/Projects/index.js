import React, {useEffect, useRef} from 'react';
import Header from '../../components/Header';
import gsap from 'gsap';
import './project.scss';
import project_img from '../../Assets/project6.jpg';
import {CSSRulePlugin} from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {TimelineLite, Power2} from 'gsap/all';
import {motion} from 'framer-motion';
gsap.registerPlugin(CSSRulePlugin);

function Projects() {
  gsap.registerPlugin(CSSRulePlugin);

  const timeline_home = gsap.timeline();

  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  var tl = new TimelineLite();

  useEffect(() => {
    tl.to(container,{duration:0, visibility:'visible'})
    .to(imageReveal,{duration: 1.2, width: "0%", ease:Power2.easeInOut})
    .from(image,{duration:1.2, scale: 1.6, ease:Power2.easeInOut, delay:-1.2})
  });

  return (
    <>
      <Header timeline={timeline_home} />
      <div className='project'>
        <motion.div className='motion-div'
          initial= {{ 
            height: '100%' 
          }}
          animate = {{ 
            height: '0%',
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2.8 }
          }}
          >
          <div className='wrap'>
            <div className='project-title'>Hi, i'm title</div>
            <div className='project-sub-title'>Sub page</div>
            <div ref={el => (container = el)}  className='project-container'>
              <div className='img-container'>
                <img ref={el => (image = el) }src={project_img}  alt=""/>
              </div>
            </div>
          </div>
          <div className='test'>
          This contents box
          </div>
          <div className='test'>
          This contents box
          </div>
          <div className='test'>
          This contents box
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Projects