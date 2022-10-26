import React, {useEffect, useRef} from 'react';
import Header from '../../components/Header';
import gsap from 'gsap';
import './project.scss';
import project_img from '../../Assets/project6.jpg';
import {CSSRulePlugin} from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {TimelineLite, Power2} from 'gsap/all';
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
    .to(imageReveal,{duration: 1.4, width: "0%", ease:Power2.easeInOut})
    .from(image,{duration:1.4, scale: 1.6, ease:Power2.easeInOut, delay:-1.4})
  });

  return (
    <div>
      <Header timeline={timeline_home} />

      <div className='wrap'>
        <div ref={el => (container = el)}  className='project-container'>
          <div className='img-container'>
            <img ref={el => (image = el) }src={project_img}  alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects