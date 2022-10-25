import React, {useRef,useEffect,useLayoutEffect} from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import MenuIcon from '../../Assets/menu.svg';
import gsap from 'gsap';

function Header({timeline}) {

  useEffect( () => {
   timeline.to(".liLink",{
        y: 0,
        opacity: 1,
        duration: 1,
        delay: .1,
        stagger: {
          amount: .3
        }
      }
    )

  },[]);

  return (
    <div>
      <header>
        <div id="logo"></div>
        <div className='toggle-menu'>
          <img src={MenuIcon}  alt=''/>
        </div>
        <div className='menu-items'>
          <li><Link to="/" className='liLink'>Home</Link></li>
          <li><Link to="/about" className='liLink'>About</Link></li>
          <li ><Link to="/project" className='liLink'>Projects</Link></li>
        </div>
      </header>
    </div>
  )
}

export default Header