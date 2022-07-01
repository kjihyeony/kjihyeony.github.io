import React from "react";
import styled from 'styled-components';
import Theme from './../Theme';
import Navbar  from './../Navbar';
import Sidebar  from './../Sidebar'
import { BrowserRouter as Router } from 'react-router-dom';

const HeaderWrap = styled.div`
background: wheat;
@media ${Theme.laptop} {
  background: red;
}

@media ${Theme.laptop} {
  background: black;
}


`;

const Header = () => {
  return(
    <header className="Header"  theme={Theme}>
      <HeaderWrap>
      <Sidebar />
        <Navbar />
      </HeaderWrap>
    </header>
  )
}

export default Header