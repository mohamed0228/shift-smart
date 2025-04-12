// ContactImage.js
import React from 'react';
import styled from 'styled-components';
import ContactUsImage from '../../../Images/ContactUs/contactUSimg.jpg'
// import ContactUsImage2 from '../../../Images/ContactUs/contactUs2.jpeg'
// import ContactUsImage3 from '../../../Images/ContactUs/contactUs3.jpeg'
const ImageWrapper = styled.div`
  flex: 1;
  
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ContactImage = () => {
  return (
    <ImageWrapper>
      <Image src={ContactUsImage} alt="Contact" />
    </ImageWrapper>
  );
}

export default ContactImage;
