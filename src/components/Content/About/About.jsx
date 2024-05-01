import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import ContactUsImage from '../../../Images/ContactUs/contactUSimg.jpg';

// Animation
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled Components
const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  opacity: 0; /* Initially hide the section */
  animation: ${slideInLeft} 1s ease forwards; /* Apply animation */
  overflow: hidden; /* Hide overflow to prevent scrollbar */
`;
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  width: 100%;
  max-width: 1200px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const AboutText = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center; /* Center text */
  opacity: 0; /* Initially hide the text */
  animation: ${slideInRight} 1s ease forwards; /* Apply animation */
  box-shadow: 0px 0px 30px rgba(255, 0, 0, 0.7); /* Make the shadow stronger and red */
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-bottom: 20px; /* Add margin at the bottom for smaller screens */
  }
`;

const AboutImage = styled.div`
  flex: 1;
  overflow: hidden;
  margin-left: 20px; /* Add margin to create space between text and image */
  opacity: 0; /* Initially hide the image */
  animation: ${slideInLeft} 1s ease forwards; /* Apply animation */
  display: flex;
  justify-content: center;
  align-items: center; /* Center the image */
  
  img {
    max-width: 90%; /* Ensure the image doesn't exceed its container's width */
    height: auto;
    border-radius: 30%; /* Make the image fully round */
    margin-top: 10px; /* Add some margin */
    box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.7); /* Apply the same shadow as the text */
  }

  @media (max-width: 768px) {
    margin-left: 0; /* Remove margin for smaller screens */
  }
`;

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'; // Show the section when it enters the viewport
        }
      });
    });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
    <AboutSection ref={sectionRef}>
      <h2>About Us</h2>
      <AboutWrapper>
        <AboutText>
          <h3>Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            nisi et quam rutrum tincidunt. In hac habitasse platea dictumst.
            Nullam sodales eget justo a iaculis. Vivamus nec sapien arcu.
            Vivamus malesuada libero vel orci varius interdum.
          </p>
        </AboutText>
        <AboutImage>
          <img src={ContactUsImage} alt="Contact" />
        </AboutImage>
      </AboutWrapper>
    </AboutSection>
     <AboutSection ref={sectionRef}>
     <h2>About Us</h2>
     <AboutWrapper>
       <AboutText>
         <h3>Our Story</h3>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
           nisi et quam rutrum tincidunt. In hac habitasse platea dictumst.
           Nullam sodales eget justo a iaculis. Vivamus nec sapien arcu.
           Vivamus malesuada libero vel orci varius interdum.
         </p>
       </AboutText>
       <AboutImage>
         <img src={ContactUsImage} alt="Contact" />
       </AboutImage>
     </AboutWrapper>
   </AboutSection>
   <AboutSection ref={sectionRef}>
     <h2>About Us</h2>
     <AboutWrapper>
       <AboutText>
         <h3>Our Story</h3>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
           nisi et quam rutrum tincidunt. In hac habitasse platea dictumst.
           Nullam sodales eget justo a iaculis. Vivamus nec sapien arcu.
           Vivamus malesuada libero vel orci varius interdum.
         </p>
       </AboutText>
       <AboutImage>
         <img src={ContactUsImage} alt="Contact" />
       </AboutImage>
     </AboutWrapper>
   </AboutSection>
   <AboutSection ref={sectionRef}>
     <h2>About Us</h2>
     <AboutWrapper>
       <AboutText>
         <h3>Our Story</h3>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
           nisi et quam rutrum tincidunt. In hac habitasse platea dictumst.
           Nullam sodales eget justo a iaculis. Vivamus nec sapien arcu.
           Vivamus malesuada libero vel orci varius interdum.
         </p>
       </AboutText>
       <AboutImage>
         <img src={ContactUsImage} alt="Contact" />
       </AboutImage>
     </AboutWrapper>
   </AboutSection>
   <AboutSection ref={sectionRef}>
     <h2>About Us</h2>
     <AboutWrapper>
       <AboutText>
         <h3>Our Story</h3>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
           nisi et quam rutrum tincidunt. In hac habitasse platea dictumst.
           Nullam sodales eget justo a iaculis. Vivamus nec sapien arcu.
           Vivamus malesuada libero vel orci varius interdum.
         </p>
       </AboutText>
       <AboutImage>
         <img src={ContactUsImage} alt="Contact" />
       </AboutImage>
     </AboutWrapper>
   </AboutSection>
   
   </>
  );
};

export default About;
