import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import bgImage from '../assets/background.jpg';

const Section = styled.section`
  height: 100vh;
  padding: 5rem 2rem;
  background: url(${bgImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5); /* dark overlay for readability */
    z-index: 0;
  }

  div {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const Home = () => {
  return (
    <Element name="home">
      <Section>
        <div>
          <h1>Hello, Welcome to my Portfolio!</h1>
          <p>My name is Gabriela Godfrey and I build responsive and interactive websites and applications.</p>
        </div>
      </Section>
    </Element>
  );
};

export default Home;