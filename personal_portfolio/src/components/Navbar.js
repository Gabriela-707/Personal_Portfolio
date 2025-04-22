import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #cbdbdb;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavLinks>
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </NavLinks>
        </Nav>
    );
};

export default Navbar;