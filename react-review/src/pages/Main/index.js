import React, { useState,useEffect,useLayoutEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Main.scss';
import flower from '../../Assets/flower.svg';
import another from '../../Assets/another.svg';
import arrow from '../../Assets/arrow.svg'
import gsap from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Transition from '../../components/Transition';
import {ProjectData} from '../../data/MainProject'
import { delay } from 'framer-motion';

const Main = (props) => {
  const main = gsap.timeline();
  const main1 = useRef(null);


  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = gsap.timeline();
  useEffect(()=>{
    if (p1.current) { return; }
    p1.current = true;

    timeline_home.from([text1, text2, text3, text4],{
      duration: 1,
      skewY: 15,
      y: 400,
      stagger: {
        amount: .2
      }
    },"-=1.2")
    timeline_home.from(p1,{
        duration:.6,
        x: -100,
        opacity: 0,
      },"-=.5");
  })


  let mainShortAbout = useRef();
  let mainshortP = useRef();
  let projectBoxRef = useRef();
  let moreMeRef = useRef();
  let moreMeSubRef = useRef();
  let moreArrRef = useRef();


  useLayoutEffect (() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSRulePlugin);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger : mainShortAbout.current,
        start: 'top center',
        end: 'bottom top',
        scrub:true,
        // markers: true,
      }
    });
    tl.to(mainShortAbout.current,{
      className: 'main-h1-short-about active',
    })
    tl.to(mainshortP.current,{
      className: 'main-sub-p-short-about active'
    },">-0.3")
    tl.to(projectBoxRef.current,{
      className: 'project-box-wrap active',
    })


    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger:moreMeRef.current,
        start: 'top bottom',
        end: 'bottom center',
        scrub : 0.5,
        markers: true,
      }
    })
    tl2.to(moreMeRef.current,{
      scale: 1.8,
      rotationX: -40,
    })
    tl2.fromTo(moreMeSubRef.current,{
      opacity:0,
    },{opacity: 1})
    tl2.fromTo( moreArrRef.current,{
      y: 50,
      opacity: 0,
    },{y:0, opacity: 1})
    tl2.to(moreMeRef.current,{
      scale: 1,
      rotationX: 0,
    })


    return() => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      // tl.current.kill();
    }

  },[] )



  return (
    <>
      <Transition timeline={main}/>
      <div className='main'>
        <Header timeline={timeline_home}/>
        {/* container */}
        <div className='container'>
          <div className='container1'>
            <div className='txt-line' id="taimoor">
              <p ref={el => text1 =el}>Taimoor</p>
            </div>
            <div className='txt-line line-bottom' id="shahzada">
              <p ref={el => text2 =el}>Shahzada</p>
            </div>
          </div>
          <div></div>
        </div>
        {/* container */}
        <div className='left-side-quote'>
          <p ref={el => p1 =el}>I Create digital experiences that merge art <br /> direction, branding, creatieve stategy, web <br /> design, protototyping.</p>
        </div>
        {/* container */}
        <div className='container'>f
          <div></div>
          <div className='container1'>
            <div className='txt-line' id="digital">
              <p ref={el => text3 =el}>Digital</p>
            </div>
            <div className='txt-line line-bottom' id="designer">
              <p ref={el => text4 =el}>Creator</p>
            </div>
          </div>
        </div>
        {/* container */}
        <div className='flower-svg'>
          <img src={flower} alt=""/>
        </div>
        <div className='short-about'>
          <div className='main-h1-short-about' ref={mainShortAbout}>
            <h1 className='main-short-about'>
              shortly
            </h1>
            <h1 className='main-short-about'>
              About
            </h1>
            <h1 className='main-short-about'>
              MySelf!
            </h1>
          </div>
          <div className='main-sub-p-short-about' ref={mainshortP}>
            <p className='main-sub-short-about'>
              I BELIEVE THAT PROJECT THAT I DO.
            </p>
            <p className='main-sub-short-about'>
              I ALWAYS TRY TOFIND  THE OPTIMAL SOLUTION
            </p>
          </div>
          <div className='another-svg'>
            <img src={another} alt="" />
          </div>
        </div>
        {/* project-box-wrap */}
        <div className='project-box-wrap' id="project" ref={projectBoxRef}>
          <Link to="ProjectDetail/sdc" state={ProjectData[0]} className='project-box'>
            <h1>Samsung Developer Conference</h1>
            <p className='project-box-p'>삼성 개발자 컨퍼런스 사이트 구축 프로젝트입니다</p>dc
            <p>____</p>
          </Link>
          <Link to="ProjectDetail/hynix" state={ProjectData[1]} className='project-box'>
            <h1>SK Hyninx Design System 고도화</h1>
            <p className='project-box-p'>디자인 컴포넌트 고도화 프로젝트입니다.</p>
            <p>____</p>
          </Link>
          <div className='project-box'>
            <h1>Samsung Tizen Develipers</h1>
            <p className='project-box-p'>삼성 타이젠 개발자 사이트 구축 프로젝트입니다.</p>
            <p>____</p>
          </div>
          <div className='project-box'>
            <h1>금융규제 Sandbox</h1>
            <p className='project-box-p'>금융규제 샌드박스 구축 프로젝트입니다.</p>
            <p>____</p>
          </div>
          <div className='project-box'>
            <h1>UXS - SKT Design System </h1>
            <p className='project-box-p'>디자인 시스템 구축 프로젝트입니다.</p>
            <p>____</p>
          </div>
          <div className='project-box'>
            <h1>Samsung Theme Event</h1>
            <p className='project-box-p'>삼성 테마 이벤트 페이지 운영 프로젝트입니다.</p>
            <p>____</p>
          </div>
          <div className='project-box'>
            <h1>Samsung PayAdmin</h1>
            <p className='project-box-p'>삼성페이 어드민 페이지를 관리하는 운영 프로젝트입니다.</p>
            <p>____</p>
          </div>
          <div className='project-box'>
            <h1>SDS</h1>
            <p className='project-box-p'>다국어 관리 및 웹접근성 갱신 업무를 진행했던 운영 프로젝트입니다.</p>
            <p>____</p>
          </div>
        </div>
        {/* project-box-wrap */}
        <div className='more-me'>
          <p ref={moreMeSubRef}>Click me!</p>
          <div className='more-me-text'>
            <Link className="more-me-link" to="/projects" ref={moreMeRef}> More about Me<img src={arrow} ref={moreArrRef} alt=""/></Link>
          </div>
        </div>
        <div>
          d<br/>\d<br/>
          d<br/>
          d<br/>
          d<br/>
          d<br/>
          d<br/>
          d<br/>
          d<br/>
          d<br/>
          d<br/>
        </div>
        <div>
        d<br/>\d<br/>
        d<br/>
        d<br/>
        d<br/>
        d<br/>
        d<br/>
        d<br/>
        d<br/>
        d<br/>
        d<br/>
      </div>
        {/* bg-cloud */}
        <div className='main-cloud'></div>
      </div>
      <Footer />
    </>
  )
}

export default Main