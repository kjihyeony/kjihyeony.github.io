import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink  } from './NavbarElement';


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="abotut">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="abotut">Discover</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to ="/signin">Sign in</NavBtnLink> 
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;