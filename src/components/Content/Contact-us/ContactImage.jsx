// ContactImage.js
import React from 'react';
import styled from 'styled-components';
import ContactUsImage from '../../../Images/ContactUs/contactUSimg.jpg'
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
