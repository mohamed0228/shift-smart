// ContactForm.js
import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const Form = styled.form`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const ContactForm = () => {
  return (
    <FormWrapper>
      <Form>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea rows="5" placeholder="Your Message"></TextArea>
        <Button type="submit">Send Message</Button>
      </Form>
    </FormWrapper>
  );
}

export default ContactForm;
