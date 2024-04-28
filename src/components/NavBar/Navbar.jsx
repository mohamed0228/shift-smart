import React from 'react';
import styled from 'styled-components';
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Aligns items to the start and end of the container */
  align-items: center; /* Centers items vertically */
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
      display: inline-block; /* Ensures each list item appears horizontally */
      margin-left: 10px; /* Adds spacing between list items */

      &:first-child {
        margin-left: 0; /* Removes margin from the first list item */
      }

      a {
        display: block;
        color: white;
        text-align: center;
        /* padding: 14px 16px; */
        padding: 10px 20px;
        text-decoration: none;
        cursor: pointer;
        border-radius: 5px;

        &:hover {
          background-color: #555;
        }
      }
    }
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #ffffff;
`;




const Navbar = ({ changeContent }) => {
  return (
    <NavbarWrapper>
        <Logo>  Shift Smart</Logo>
      <ul>
        <li><a onClick={() => changeContent('home')}>Home</a></li>
        <li><a onClick={() => changeContent('about')}>About</a></li>
        <li><a onClick={() => changeContent('shop')}>Shop Cars</a></li>
        <li><a onClick={() => changeContent('sellTrade')}>Sell/Trade</a></li>
        <li><a onClick={() => changeContent('contact')}>Contact</a></li>
      </ul>
    </NavbarWrapper>
  );
}

export default Navbar;
