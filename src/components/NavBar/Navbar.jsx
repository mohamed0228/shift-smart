import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: linear-gradient(45deg, #0f0f0f, #1a1a1a);
  padding: 15px 25px;
  z-index: 1500;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 4px 15px rgba(0, 0, 0, 0.6)' : 'none'};
  transition: box-shadow 0.3s ease;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  color: #ffcc00;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    background-color: #1a1a1a;
    margin-top: 10px;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    animation: slideDown 0.3s ease forwards;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const NavItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }

  &:first-child {
    margin-left: 0;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${({ active }) => (active ? '#ffcc00' : '#eee')};
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? '700' : '500')};
  cursor: pointer;
  position: relative;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    color: #ffcc00;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 50%;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: #ffcc00;
    transition: width 0.3s ease, left 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

const ToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: #ffcc00;
    font-size: 2rem;
    cursor: pointer;
    margin-left: auto;
  }
`;

const Navbar = ({ changeContent }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const handleNavItemClick = (section) => {
    changeContent(section);
    setActiveSection(section);
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarWrapper isScrolled={isScrolled}>
      <Logo>Shift Smart</Logo>

      <ToggleButton onClick={toggleNav}>
        {isNavOpen ? '✕' : '☰'}
      </ToggleButton>

      <NavLinks isOpen={isNavOpen}>
        <NavItem>
          <NavButton
            active={activeSection === 'home'}
            onClick={() => handleNavItemClick('home')}
          >
            Home
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton
            active={activeSection === 'about'}
            onClick={() => handleNavItemClick('about')}
          >
            About
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton
            active={activeSection === 'shop'}
            onClick={() => handleNavItemClick('shop')}
          >
            Shop Cars
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton
            active={activeSection === 'sellTrade'}
            onClick={() => handleNavItemClick('sellTrade')}
          >
            Sell/Trade
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton
            active={activeSection === 'contact'}
            onClick={() => handleNavItemClick('contact')}
          >
            Contact
          </NavButton>
        </NavItem>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
