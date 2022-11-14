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
  gsap.registerPlugin(ScrollTrigger);

  const timeline_home = gsap.timeline();

  let title = useRef(null);

  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const letterBoxRef = useRef(null);
  const letterRef = useRef(null);
  const letterRef2 = useRef(null);

  var tl = new TimelineLite();

  useEffect(() => {
    tl.to(container,{duration:0, visibility:'visible'})
    .to(imageReveal,{duration: 1.2, width: "0%", ease:Power2.easeInOut})
    .from(image,{duration:1.2, scale: 1.6, ease:Power2.easeInOut, delay:-1.2})
    .from(title,{duration: 1, y: 10, opacity: 0})
  });

  useEffect( ()=>{
    gsap.from(letterRef.current,{
      scrollTrigger: {
        trigger: letterRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: true,
        toggleClass:'active',
      }
    })

    gsap.from(letterRef2.current,{
      scrollTrigger: {
        trigger: letterRef2.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: true,
        toggleClass:'active',
      }
    })

  })

  
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
            transition: { easeOut: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }
          }}
          >
          </motion.div>
          <motion.div className='motion-div2'
          initial= {{ 
            height: '100%' 
          }}
          animate = {{ 
            height: '0%',
            transition: { easeOut: [0.455, 0.03, 0.515, 0.955], duration: 1 }
          }}
          >
          </motion.div>
          <div className='wrap'>
            <div ref={el => (title = el)} className='project-title'>Hi, i'm title</div>
           {/*<div className='project-sub-title'>Sub page</div>*/}
            <div ref={el => (container = el)}  className='project-container'>
              <div className='img-container'>
                <img ref={el => (image = el) }src={project_img}  alt=""/>
              </div>
            </div>
            <div ref={letterBoxRef} className='project-letter-space project-letter-space-1'>
              <div className='letter1' ref={letterRef}>this<br />TEXTTEST</div>
              <div className='letter2' ref={letterRef2} >
                Reprehenderit amet elit ea culpa sit deserunt culpa Lorem velit exercitation exercitation. <br />
                Cupidatat nulla nostrud eu officia adipisicing nulla ullamco elit ad incididunt sit. <br />
                Occaecat mollit adipisicing quis aliquip enim Lorem est est est irure.
              </div>
           </div>
          </div>

          <div className='test'>
          This contents box
          </div>
          <div className='test'>
          This contents box
          </div>
      </div>
    </>
  )
}

export default Projects