import react,{useRef, useEffect} from'react';
import './Transition.scss';
import gsap, {Power4} from 'gsap'


function Transition( {timeline} ) {
  const timeline_trans = gsap.timeline();
  const trans = useRef(null);

  useEffect( () => {
    timeline_trans.to(trans.current,{
      duration: 5,
      x:2600,
      ease: Power4.easeOut
    });
  } )
  return (
    <div>
      <div className='transition-effect' ref={trans}></div>
    </div>
  )
}

export default Transition