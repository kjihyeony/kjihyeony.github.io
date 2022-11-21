import React, {useRef, useEffect} from 'react';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Main, About, Projects, AboutSub, ProjectDetail} from './pages/';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.scss';
import gsap from 'gsap'
import {AnimatePresence} from 'framer-motion'
import {ProjectData} from './data/MainProject'


function App() {
  let cursor = useRef(null)
  let posX1 = useRef(null)
  let posY1= useRef(null)
  let mouseX1 = useRef(null)
  let mouseY1 = useRef(null)

  let tl1 = gsap.timeline();
  let tl2 = gsap.timeline();

  useEffect( ()=> {
    if (cursor.current) { return; }
    cursor.current = true;

    let posX  = posX1.current;
    let posY = posY1.current;
    let mouseX = mouseX1.current;
    let mouseY = mouseY1.current;

    tl1.to({}, 0.016,{
      repeat: -1,
      onRepeat:function() {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl1.set(cursor, {
          css : {
            left:posX-50,
            top:posY-50,
          },
        });
      }
    })

    document.addEventListener("mousemove", function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
    })
    tl2.from(cursor, {
      duration: 1.5,
      delay: 2,
      opacity: 0,
    }, "-=1")

    console.log(mouseX)
  });

  const imageDetails = {
    width: 524,
    height: 650,
  };


  return (
    <div className="App">
      <Router>
        <AnimatePresence  initial={false} exitBeforeEnter/>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<About imageDetails={imageDetails} />} />
            <Route exact path="/project" element={<Projects />} />
            <Route exact path="/about/:id" element={<AboutSub imageDetails={imageDetails} />} />
            <Route exact path="/projectDetail/sdc" element={<ProjectDetail />} />
            <Route exact path="/projectDetail/hynix" element={<ProjectDetail />} />
          </Routes>
          <div className="cursor-follower" ref={el=>cursor = el}></div>
        <AnimatePresence /> 
      </Router>

    </div>
  );
}

export default App;
