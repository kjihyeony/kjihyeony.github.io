import React from "react";
import styled from 'styled-components';
import Theme from './../Theme'

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
    <header className="Header"  Theme={Theme}>
      <HeaderWrap>
        <div className="Header-inner">
          <h1>SDC Header</h1>
            <ul className="Gnb">
              <li className="Gnb-item"><a href="#">Menu1</a></li>
              <li className="Gnb-item"><a href="#">Menu2</a></li>
            </ul>
        </div>
      </HeaderWrap>
    </header>
  )
}

export default Header