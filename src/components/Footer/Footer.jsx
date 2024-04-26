import React from 'react';
import { FooterContainer, FooterContent, FooterText, FooterLink } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2024 Shift Smart. All rights reserved.</FooterText>
        <div>
          <FooterLink href="/">Privacy Policy</FooterLink>
          <span> | </span>
          <FooterLink href="/">Terms of Service</FooterLink>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
