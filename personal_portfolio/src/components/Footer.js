import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #94b4bc; // Nepal
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin: 1rem 0;

  a {
    color: white;
    margin: 0 0.5rem;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #cbdbdb;
    }
  }
`;

const NavLinks = styled.div`
  margin: 1rem 0;

  a {
    color: white;
    margin: 0 1rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Built by Gabriela Godfrey</p>

      <SocialLinks>
        <a href="https://github.com/Gabriela-707" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/gabriela-godfrey-16087a361/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </SocialLinks>

      <NavLinks>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </NavLinks>

    </FooterWrapper>
  );
};

export default Footer;