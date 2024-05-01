
import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #000000;
  padding: 10px 20px;
  z-index: 1000;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    li {
      display: inline-block;
      margin-left: 10px;

      &:first-child {
        margin-left: 0;
      }

      button {
        display: block;
        color: white;
        text-align: center;
        padding: 10px 20px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        border-radius: 5px;

        &:hover {
          background-color: #555;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: #333;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      li {
        display: block;
        margin: 10px 0;

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: #ffffff;
`;

const ToggleButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Navbar = ({ changeContent }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = () => {
    setIsNavOpen(false); // Close the modal list when any navigation item is clicked
  };

  return (
    <NavbarWrapper isOpen={isNavOpen}>
      <Logo>Shift Smart</Logo>
      <ul>
        <li><button onClick={() => { changeContent('home'); handleNavItemClick(); }}>Home</button></li>
        <li><button onClick={() => { changeContent('about'); handleNavItemClick(); }}>About</button></li>
        <li><button onClick={() => { changeContent('shop'); handleNavItemClick(); }}>Shop Cars</button></li>
        <li><button onClick={() => { changeContent('sellTrade'); handleNavItemClick(); }}>Sell/Trade</button></li>
        <li><button onClick={() => { changeContent('contact'); handleNavItemClick(); }}>Contact</button></li>
      </ul>
      <ToggleButton onClick={toggleNav}>{isNavOpen ? '✕' : '☰'}</ToggleButton>
    </NavbarWrapper>
  );
};

export default Navbar;


