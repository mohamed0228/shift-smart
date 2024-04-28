import React from 'react';
import { HeaderContainer, Logo, Nav } from './Header.styled';
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Shift Smart</Logo>
      <Nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Shop Cars</a></li>
          <li><a href="/">Sell/Trade</a></li>
          <li><a href="/">Contact</a></li>
         
        </ul>
      </Nav>
    </HeaderContainer>
  );
};
export default Header;