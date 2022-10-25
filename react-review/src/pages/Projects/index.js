import React, {useEffect, useRef} from 'react';
import Header from '../../components/Header';
import gsap from 'gsap'


function Projects() {
  const timeline_home = gsap.timeline();

  return (
    <div>
      <Header timeline={timeline_home} />
    </div>
  )
}

export default Projects