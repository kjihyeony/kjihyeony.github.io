import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import MenuIcon from '../../Assets/menu.svg'

function Header() {
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
          <li><Link to="/project" className='liLink'>Projects</Link></li>
        </div>
      </header> 
    </div>
  )
}

export default Header