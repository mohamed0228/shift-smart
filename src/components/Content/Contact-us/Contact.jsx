// ContactPage.js
import React from 'react';
import styled from 'styled-components';
import ContactImage from './ContactImage';
import ContactForm from "./ConatctForm"

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const ContactPage = () => {
  return (
    <ContactWrapper>
      <ContactImage />
      <ContactForm />
    </ContactWrapper>
  );
}

export default ContactPage;
