// // Ensure this import is at the top
// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import styled from 'styled-components';  // Make sure this is at the top

// // Styled Components

// // Container for the footer, with a dark gradient background and a smooth transition effect
// const FooterContainer = styled.footer`
//   background: linear-gradient(45deg, #d32f2f, #9c27b0);
//   color: #fff;
//   padding: 2rem 1rem;
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.2);
//   transition: background 0.3s ease;
//   z-index: 1000;

//   &:hover {
//     background: linear-gradient(45deg, #e91e63, #673ab7);
//   }
// `;

// // Main content container for the footer
// const FooterContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   flex-wrap: wrap;
//   gap: 20px;
// `;

// // Text style for footer content
// const FooterText = styled.p`
//   margin: 0;
//   font-size: 1.1rem;
//   font-weight: 500;
//   opacity: 0.8;
//   transition: opacity 0.3s ease;

//   &:hover {
//     opacity: 1;
//   }
// `;

// // Styling for the links with hover effects and underline animation
// const FooterLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   font-size: 1.1rem;
//   font-weight: 600;
//   margin: 0 10px;
//   transition: color 0.3s ease, transform 0.3s ease;

//   &:hover {
//     color: #ffeb3b;
//     transform: scale(1.1);
//     text-decoration: underline;
//   }
// `;

// // Social media icons container
// const SocialIcons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
// `;

// // Social icon styling with hover effect
// const SocialIcon = styled.a`
//   font-size: 1.5rem;
//   color: #fff;
//   transition: transform 0.3s ease, color 0.3s ease;

//   &:hover {
//     color: #ffeb3b;
//     transform: scale(1.2);
//   }
// `;

// // Footer component
// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterContent>
//         <FooterText>© 2024 Shift Smart. All rights reserved.</FooterText>
//         <div>
//           <FooterLink href="/">Privacy Policy</FooterLink>
//           <span> | </span>
//           <FooterLink href="/">Terms of Service</FooterLink>
//         </div>
//         <SocialIcons>
//           <SocialIcon href="https://facebook.com" target="_blank" aria-label="Facebook">
//             <FaFacebookF />
//           </SocialIcon>
//           <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
//             <FaTwitter />
//           </SocialIcon>
//           <SocialIcon href="https://instagram.com" target="_blank" aria-label="Instagram">
//             <FaInstagram />
//           </SocialIcon>
//           <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
//             <FaLinkedinIn />
//           </SocialIcon>
//         </SocialIcons>
//       </FooterContent>
//     </FooterContainer>
//   );
// };

// export default Footer;
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Styled Components

const FooterContainer = styled.footer`
  background: linear-gradient(45deg, #0f0f0f, #1a1a1a);
  color: #eee;
  padding: 2rem 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.4);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1.2rem 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 15px;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #bbb;

  @media (max-width: 600px) {
    text-align: center;
    width: 100%;
  }
`;

const FooterLink = styled.a`
  color: #ddd;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0 8px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.3rem;
  color: #ccc;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #ffcc00;
    transform: scale(1.2);
  }
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2024 Shift Smart. All rights reserved.</FooterText>
        <div>
          <FooterLink href="/">Privacy Policy</FooterLink>
          <span style={{ color: '#777' }}>|</span>
          <FooterLink href="/">Terms of Service</FooterLink>
        </div>
        <SocialIcons>
          <SocialIcon href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </SocialIcon>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

