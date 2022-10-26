import React, { useEffect,useRef } from 'react';
import Header from '../../components/Header';
import './main.scss';
import flower from '../../Assets/flower.svg';
import another from '../../Assets/another.svg';
import arrow from '../../Assets/arrow.svg'
import {Link}from 'react-router-dom';
import gsap from 'gsap';

function Main() {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = gsap.timeline();
  useEffect( ()=>{
    if (p1.current) { return; }
    p1.current = true;
  
    timeline_home.from([text1, text2, text3, text4],{
      duration: .8,
      skewY: 15,
      y: 400,
      stagger: {
        amount: .1
      }
    },"-=1.2")
    timeline_home.from(
      p1,
      {
        duration:.6,
        x: -100,
        delay: .1,
        opacity: 0,
      }
    );

    return () => {

    };
  })

  return (
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
      <div className='container'>
        <div></div>
        <div className='container1'>
          <div className='txt-line' id="digital">
            <p ref={el => text3 =el}>Digital</p>
          </div>
          <div className='txt-line line-bottom' id="designer">
            <p ref={el => text4 =el}>Designer</p>
          </div>
        </div>
      </div>
      {/* container */}
      <div className='flower-svg'>
        <img src={flower} alt=""/>
      </div>
      <div className='short-about'>
        <div className='main-h1-short-about'>
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
        <div className='sub-main-p-short-about'>
          <p className='sub-main-short-about'>
            I BELIEVE THAT PROJECT THAT I DO.
          </p>
          <p className='sub-main-short-about'>
            I ALWAYS TRY TOFIND  THE OPTIMAL SOLUTION
          </p>
        </div>  
        <div className='another-svg'>
          <img src={another} alt="" />
        </div>
        <div className='my-skills-main-reel'>
          <div className='my-skills-reel' id="skill-reel">
            <div className='reel-item'>&nbsp; -- My Skills </div>
            <div className='reel-item'>&nbsp; -- My Skills </div>
            <div className='reel-item'>&nbsp; -- My Skills </div>
            <div className='reel-item'>&nbsp; -- My Skills </div>
            <div className='reel-item'>&nbsp; -- My Skills </div>
            <div className='reel-item'>&nbsp; -- My Skills </div>
            <div className='reel-item'>&nbsp; -- My Skills </div>
            <div className='reel-item'>&nbsp; -- My Skills </div>
          </div>
          {/* skill-set-boxes */}
          <div className='skill-set-boxes'>
            <div className='skill-set-box'>
              <h1 className='skill-set-box-h1'>HTML5</h1>
              <p className='skill-set-box-p'>I mainly  used to develop Website Markup</p>
              <p></p>
            </div>
            <div className='skill-set-box'>
              <h1 className='skill-set-box-h1'>CSS3</h1>
              <p className='skill-set-box-p'>I use this to style and bring design to browser</p>
              <p></p>
            </div>
            <div className='skill-set-box'>
              <h1 className='skill-set-box-h1'>Javascript</h1>
              <p className='skill-set-box-p'>With this technology i create visyal effects andn interactionn and DOM</p>
              <p></p>
            </div>
            <div className='skill-set-box'>
              <h1 className='skill-set-box-h1'>React.js</h1>
              <p className='skill-set-box-p'>I loved it! I use it to create application that have lot of real</p>
              <p>____</p>
            </div>
            <div className='skill-set-box'>
              <h1 className='skill-set-box-h1'>Greensok - GSAP</h1>
              <p className='skill-set-box-p'>I used this as an anination library, The most loved ones!</p>
              <p>____</p>
            </div>
            <div className='skill-set-box'>
              <h1 className='skill-set-box-h1'>Three.js</h1>
              <p className='skill-set-box-p'>This library deals and simplifies the workinng with webgl and gls</p>
              <p>____</p>
            </div>
            <div className='skill-set-box'>
              <h1 className='skill-set-box-h1'>Sass</h1>
              <p className='skill-set-box-p'>I prefer this also innstead of CSS bacause of advance functionnality</p>
              <p>____</p>
            </div>
            <div className='skill-set-box'>
              <h1 className='skill-set-box-h1'>Node.js</h1>
              <p className='skill-set-box-p'>I use it to writing server scripting for application</p>
              <p>____</p>
            </div>
          </div>
          {/* skill-set-boxes */}
          <div className='project-and-work'>
            <h1>
              <Link className="h1-project"  to="/projects"> My Project and Works <img src={arrow} alt=""/></Link>
            </h1>
            <br/>
            <p>Click me!</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main