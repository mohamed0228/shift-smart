

// // export default About;
// import React, { useState } from 'react';
// import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
// import { motion } from 'framer-motion';
// import { FaFacebookF } from 'react-icons/fa';
// import ContactUsImage from '../../../Images/ContactUs/contactUSimg.jpg';

// // Theme Definitions
// const lightTheme = {
//   bg: '#f9f9f9',
//   text: '#222',
//   cardBg: '#fff',
//   accent: '#d32f2f',
//   star: '#f5a623',
// };

// const darkTheme = {
//   bg: '#0b0b0b',
//   text: '#f1f1f1',
//   cardBg: 'rgba(255, 255, 255, 0.1)',
//   accent: '#ffcc70',
//   star: '#ffd700',
// };

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//   }

//   body {
//     margin: 0;
//     background: ${({ theme }) => theme.bg};
//     color: ${({ theme }) => theme.text};
//     font-family: 'Segoe UI', sans-serif;
//     overflow-x: hidden;
//   }
// `;

// // Layout & Sections
// const ScrollWrapper = styled.div`
//   scroll-snap-type: y mandatory;
//   overflow-y: scroll;
//   height: 100vh;
// `;

// const Section = styled.section`
//   padding: 80px 20px;
//   scroll-snap-align: start;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   background: ${({ theme }) => theme.bg};
// `;

// const Wrapper = styled.div`
//   max-width: 1200px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 60px;
// `;

// // Text + Image Block
// const ContentBlock = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   gap: 30px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     align-items: center;
//   }
// `;

// const TextBox = styled.div`
//   flex: 1;
//   padding: 30px;
//   background-color: ${({ theme }) => theme.cardBg};
//   border-radius: 20px;
//   backdrop-filter: blur(8px);
//   box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);

//   h2 {
//     font-size: clamp(1.8rem, 2.5vw, 2.4rem);
//     color: ${({ theme }) => theme.accent};
//     margin-bottom: 1rem;
//   }

//   p {
//     color: ${({ theme }) => theme.text};
//     font-size: 1rem;
//     line-height: 1.6;
//   }
// `;

// const ImageBox = styled.div`
//   flex: 1;
//   text-align: center;

//   img {
//     width: 100%;
//     max-width: 400px;
//     height: auto;
//     border-radius: 20px;
//     box-shadow: 0 8px 30px rgba(255, 255, 255, 0.15);
//     transition: transform 0.3s ease;

//     &:hover {
//       transform: scale(1.05);
//     }
//   }
// `;

// // Testimonials
// const Testimonials = styled.div`
//   padding: 60px 20px;
//   background: ${({ theme }) => theme.cardBg};
//   border-radius: 20px;
//   backdrop-filter: blur(6px);
// `;

// const TestimonialCard = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   background: ${({ theme }) => theme.cardBg};
//   border-radius: 15px;
//   padding: 25px;
//   margin: 20px 0;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

//   @media (min-width: 600px) {
//     flex-direction: row;
//     align-items: center;
//   }

//   img {
//     width: 60px;
//     height: 60px;
//     border-radius: 50%;
//     object-fit: cover;
//     border: 2px solid ${({ theme }) => theme.accent};
//   }

//   .text {
//     flex: 1;

//     p {
//       font-style: italic;
//       font-size: 1rem;
//       margin-bottom: 10px;
//     }

//     span {
//       font-weight: bold;
//       color: ${({ theme }) => theme.accent};
//     }
//   }
// `;

// const StarsContainer = styled.div`
//   display: flex;
//   gap: 5px;
//   margin-top: 5px;
// `;

// const Star = styled.svg`
//   width: 20px;
//   height: 20px;
//   fill: ${({ theme }) => theme.star};
//   animation: glow 1s ease-in-out infinite alternate;

//   @keyframes glow {
//     from {
//       transform: scale(1);
//       opacity: 0.8;
//     }
//     to {
//       transform: scale(1.1);
//       opacity: 1;
//     }
//   }
// `;

// // Map Container
// const MapContainer = styled.div`
//   width: 100%;
//   padding: 0 20px;
//   margin-top: 60px;

//   iframe {
//     width: 100%;
//     height: 400px;
//     border: 0;
//     border-radius: 20px;
//     box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
//   }
// `;

// // Theme toggle
// const ToggleThemeBtn = styled.button`
//   position: fixed;
//   bottom: 90px; /* Place it above the footer */
//   right: 20px;
//   background: ${({ theme }) => theme.toggleBg || '#ffcc00'};
//   color: ${({ theme }) => theme.toggleText || '#000'};
//   border: none;
//   padding: 12px 20px;
//   border-radius: 30px;
//   cursor: pointer;
//   font-weight: bold;
//   font-size: 1rem;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
//   z-index: 2000;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//     background: ${({ theme }) => theme.toggleHoverBg || '#ffd700'};
//   }

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//     padding: 10px 16px;
//     bottom: 85px;
//     right: 15px;
//   }
// `;
// const FacebookLink = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   margin: 40px auto 0;
//   background-color: #1877f2;
//   color: white;
//   padding: 14px 26px;
//   font-size: 1.1rem;
//   font-weight: 600;
//   border-radius: 50px;
//   text-decoration: none;
//   transition: background 0.3s ease;
//   box-shadow: 0 4px 20px rgba(24, 119, 242, 0.4);
//   max-width: 300px;

//   &:hover {
//     background-color: #145dbf;
//     transform: scale(1.03);
//   }

//   svg {
//     font-size: 1.3rem;
//   }

//   @media (max-width: 480px) {
//     width: 90%;
//     font-size: 1rem;
//     padding: 12px 20px;
//   }
// `;



// // === COMPONENT ===

// const About = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   const theme = darkMode ? darkTheme : lightTheme;

//   const renderStars = count =>
//     [...Array(5)].map((_, i) => (
//       <Star
//         key={i}
//         viewBox="0 0 24 24"
//         className={i < count ? 'active' : ''}
//       >
//         <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732z" />
//       </Star>
//     ));

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <ToggleThemeBtn onClick={() => setDarkMode(prev => !prev)}>
//         {darkMode ? 'Light' : 'Dark'} Mode
//       </ToggleThemeBtn>

//       <ScrollWrapper>
//         {/* Section 1 */}
//         <Section>
//           <Wrapper>
//             <ContentBlock
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <TextBox>
//                 <h2>Welcome to Shift Smart</h2>
//                 <p>
//                   Based in Hasbrouck Heights, NJ, we provide quality pre-owned vehicles with a focus on transparency, affordability, and service.
//                 </p>
//               </TextBox>
//               <ImageBox>
//                 <img src={ContactUsImage} alt="Shift Smart Dealership" />
//               </ImageBox>
//             </ContentBlock>
//           </Wrapper>
//         </Section>
//         {/* Section facebook */}
//         <Section>
//         <FacebookLink
//   href="https://www.facebook.com/marketplace/profile/100009554773152/?ref=share_attachment"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FaFacebookF />
//   View on Facebook Marketplace
// </FacebookLink>
// </Section>

//         {/* Section 2 */}
//         <Section>
//           <Wrapper>
//             <TextBox>
//               <h2>Why Choose Us?</h2>
//               <p>
//                 Every car is inspected and backed by flexible financing options. We support you long after you drive off.
//               </p>
//             </TextBox>
//           </Wrapper>
//         </Section>

//         {/* Section 3 - Testimonials */}
//         <Section>
//           <Wrapper>
//             <Testimonials>
//               <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>
//                 Customer Reviews
//               </h2>

//               <TestimonialCard
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah" />
//                 <div className="text">
//                   <p>"Amazing experience! No pressure, just honest and helpful."</p>
//                   <StarsContainer>{renderStars(5)}</StarsContainer>
//                   <span>- Sarah J.</span>
//                 </div>
//               </TestimonialCard>

//               <TestimonialCard
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//               >
//                 <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mike" />
//                 <div className="text">
//                   <p>"Loved the vibe and the team. My go-to from now on."</p>
//                   <StarsContainer>{renderStars(4)}</StarsContainer>
//                   <span>- Mike R.</span>
//                 </div>
//               </TestimonialCard>
//             </Testimonials>
//           </Wrapper>
//         </Section>

//         {/* Section 4 - Map */}
//         <Section>
//           <Wrapper>
//             <MapContainer>
//               <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>
//                 Visit Us
//               </h2>
//               <iframe
//                 title="Shift Smart Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3384897253746!2d-74.07673202355002!3d40.8579408287897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fbbd33f06d3d%3A0x88c9fa0b3b52b9f4!2s92%20Railroad%20Ave%2C%20Hasbrouck%20Heights%2C%20NJ%2007604!5e0!3m2!1sen!2sus!4v1712930200000!5m2!1sen!2sus"
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </MapContainer>
//           </Wrapper>
//         </Section>
//       </ScrollWrapper>
//     </ThemeProvider>
//   );
// };

// export default About;
import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ContactUsImage from '../../../Images/ContactUs/contactUSimg.jpg';

// === THEME SETUP ===
const lightTheme = {
  bg: '#f9f9f9',
  text: '#222',
  cardBg: '#fff',
  accent: '#d32f2f',
  star: '#f5a623',
};

const darkTheme = {
  bg: '#0b0b0b',
  text: '#f1f1f1',
  cardBg: 'rgba(255, 255, 255, 0.1)',
  accent: '#ffcc70',
  star: '#ffd700',
};

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  body {
    margin: 0;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'Segoe UI', sans-serif;
    overflow-x: hidden;
  }
`;

// === STYLED COMPONENTS ===
const ScrollWrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const Section = styled.section`
  padding: 80px 20px;
  scroll-snap-align: start;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const ContentBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TextBox = styled.div`
  flex: 1;
  padding: 30px;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 20px;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);

  h2 {
    font-size: clamp(1.8rem, 2.5vw, 2.4rem);
    color: ${({ theme }) => theme.accent};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ImageBox = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 8px 30px rgba(255, 255, 255, 0.15);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Testimonials = styled.div`
  padding: 60px 20px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 20px;
  backdrop-filter: blur(6px);
`;

const TestimonialCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 15px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.accent};
  }

  .text {
    flex: 1;

    p {
      font-style: italic;
      font-size: 1rem;
      margin-bottom: 10px;
    }

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`;

const Star = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.star};
  animation: glow 1s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      transform: scale(1);
      opacity: 0.8;
    }
    to {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 60px;

  iframe {
    width: 100%;
    height: 400px;
    border: 0;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const ToggleThemeBtn = styled.button`
  position: fixed;
  bottom: 90px;
  right: 20px;
  background: ${({ theme }) => theme.toggleBg || '#ffcc00'};
  color: ${({ theme }) => theme.toggleText || '#000'};
  border: none;
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  z-index: 2000;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.toggleHoverBg || '#ffd700'};
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 16px;
    bottom: 85px;
    right: 15px;
  }
`;

const SocialButtons = styled.div`
  position: fixed;
  bottom: 100px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 2000;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    color: white;
    background: #1877f2;
    text-decoration: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &.instagram {
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }

    &.whatsapp {
      background: #25D366;
    }

    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    bottom: 85px;
    left: 15px;
  }
`;

// === MAIN COMPONENT ===
const About = () => {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;

  const renderStars = count =>
    [...Array(5)].map((_, i) => (
      <Star key={i} viewBox="0 0 24 24" className={i < count ? 'active' : ''}>
        <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732z" />
      </Star>
    ));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToggleThemeBtn onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? 'Light' : 'Dark'} Mode
      </ToggleThemeBtn>

      {/* Floating Social Buttons */}
      <SocialButtons>
        <a
          href="https://www.facebook.com/marketplace/profile/100009554773152/?ref=share_attachment"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook Marketplace"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/yourusername" // Replace this
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/1234567890" // Replace this
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </SocialButtons>

      <ScrollWrapper>
        <Section>
          <Wrapper>
            <ContentBlock
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TextBox>
                <h2>Welcome to Shift Smart</h2>
                <p>
                  Based in Hasbrouck Heights, NJ, we provide quality pre-owned vehicles with a focus on transparency, affordability, and service.
                </p>
              </TextBox>
              <ImageBox>
                <img src={ContactUsImage} alt="Shift Smart Dealership" />
              </ImageBox>
            </ContentBlock>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <TextBox>
              <h2>Why Choose Us?</h2>
              <p>
                Every car is inspected and backed by flexible financing options. We support you long after you drive off.
              </p>
            </TextBox>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <Testimonials>
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>
                Customer Reviews
              </h2>

              <TestimonialCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah" />
                <div className="text">
                  <p>"Amazing experience! No pressure, just honest and helpful."</p>
                  <StarsContainer>{renderStars(5)}</StarsContainer>
                  <span>- Sarah J.</span>
                </div>
              </TestimonialCard>

              <TestimonialCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mike" />
                <div className="text">
                  <p>"Loved the vibe and the team. My go-to from now on."</p>
                  <StarsContainer>{renderStars(4)}</StarsContainer>
                  <span>- Mike R.</span>
                </div>
              </TestimonialCard>
            </Testimonials>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <MapContainer>
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>
                Visit Us
              </h2>
              <iframe
                title="Shift Smart Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3384897253746!2d-74.07673202355002!3d40.8579408287897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fbbd33f06d3d%3A0x88c9fa0b3b52b9f4!2s92%20Railroad%20Ave%2C%20Hasbrouck%20Heights%2C%20NJ%2007604!5e0!3m2!1sen!2sus!4v1712930200000!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MapContainer>
          </Wrapper>
        </Section>
      </ScrollWrapper>
    </ThemeProvider>
  );
};

export default About;
