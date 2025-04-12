// // import styled from "styled-components";

// // Container for the footer, with a dark gradient background and a smooth transition effect
// export const FooterContainer = styled.footer`
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
// export const FooterContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   flex-wrap: wrap;
//   gap: 20px;
// `;

// // Text style for footer content
// export const FooterText = styled.p`
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
// export const FooterLink = styled.a`
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
// export const SocialIcons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
// `;

// // Social icon styling with hover effect
// export const SocialIcon = styled.a`
//   font-size: 1.5rem;
//   color: #fff;
//   transition: transform 0.3s ease, color 0.3s ease;

//   &:hover {
//     color: #ffeb3b;
//     transform: scale(1.2);
//   }
// `;
// Ensure styled-components is imported at the top of the file
import styled from "styled-components"; // Fix the undefined 'styled' error

// Container for the footer, with a dark gradient background and a smooth transition effect
const FooterContainer = styled.footer`
  background: linear-gradient(45deg, #111, #222); // Dark gradient
  color: #ccc;
  padding: 2rem 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  &:hover {
    background: linear-gradient(45deg, #1a1a1a, #2c2c2c);
  }
`;

// Main content container for the footer
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 20px;
`;

// Text style for footer content
// export const FooterText = styled.p`
//   margin: 0;
//   font-size: 1.1rem;
//   font-weight: 500;
//   opacity: 0.8;
//   transition: opacity 0.3s ease;

//   &:hover {
//     opacity: 1;
//   }
// `;

// Styling for the links with hover effects and underline animation
const FooterLink = styled.a`
  color: #eee;
  text-decoration: none;

  &:hover {
    color: #ffeb3b;
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  color: #bbb;
`;

// Social media icons container
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

// Social icon styling with hover effect
export const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #fff;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #ffeb3b;
    transform: scale(1.2);
  }
`;
