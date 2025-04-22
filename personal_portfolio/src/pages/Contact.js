import React, { useState } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FormSection = styled.section`
  min-height: 100vh;
  background-color: #acbcc3; /* Tower Gray */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 2rem;
`;

const SocialWrapper = styled.div`
  flex: 1;
  max-width: 400px;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const Button = styled.button`
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  background-color: #94b4bc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #7a9caa;
  }
`;

const SocialLinks = styled.div`
  margin: 1rem 0;

  a {
    color: white;
    margin: 0 0.5rem;
    font-size: 4rem;
    transition: color 0.3s;

    &:hover {
      color: #cbdbdb;
    }
  }
`;

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending message:', formData);

        // Clear the form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Element name="contact">
            <FormSection>
                <ContentWrapper>
                    <FormWrapper>
                        <Title>Contact Me</Title>
                        <form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                            <Input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                            <Textarea
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            />
                            <Button type="submit">Send</Button>
                        </form>
                    </FormWrapper>

                    <SocialWrapper>
                        <Title>My Social Links</Title>
                        <SocialLinks>
                            <a href="https://github.com/Gabriela-707" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriela-godfrey-16087a361/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </SocialLinks>
                    </SocialWrapper>
                </ContentWrapper>
            </FormSection>
        </Element>
    );
};

export default Contact;