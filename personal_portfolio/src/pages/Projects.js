import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #94b4bc;
  color: white;
`;

const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebe4e3;
  border: 8px solid ${props => props.borderColor || '#cbdbdb'};
  border-radius: 10px;
  margin-bottom: 3rem;
  padding: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    margin-right: 2rem;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

const ProjectContent = styled.div`
  flex: 1;

  h3 {
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    color: #444;
  }

  a {
    display: inline-block;
    margin-right: 1rem;
    color:rgb(107, 136, 144);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.8rem; /* Make it bigger */
  color: black;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const projects = [
    {
        title: "Art Nouveau Gallery",
        image: require('../assets/nouveau_site.png'),
        description: "The Art Nouveau Gallery is a small and simple webisite that showcases the art nouveau movement. I wanted the website to reflect the feeling of the movement by the color scheme, fonts, and text designs.",
        github: "https://Gabriela-707.github.io/Art-Nouveau-Gallery/",
    },
    {
        title: "Murder Mystery at Blackwood Manor",
        image: require('../assets/interactive_site.png'),
        description: "Murder Mystery at Blackwood Manor is an interactive web story that was written in Ink and stylized in HTML and CSS. This was a final project for a previous class and one of my first projects using front-end languages.",
        github: "https://Gabriela-707.github.io/Murder-Mystery-Game/",
    },
    {
        title: "Pet Mate",
        image: require('../assets/pet_app.png'),
        description: "Pet Mate is an application that tracks and manages your pets health and care. This project is still in the early stages of development and has only been prototyped using Figma.",
        github: "https://www.figma.com/proto/U8ZeRBuZWNj1KE1eYXryxg/Pet-Mate-Prototype?node-id=2-6010&p=f&t=30ltvm7rPyTOilfc-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A6010",
    },
];

const Projects = () => {
    return (
        <Element name="projects">
            <Section>
                <ProjectTitle>Projects</ProjectTitle>
                {projects.map((project, index) => (
                    <ProjectItem key={index}>
                        <img src={project.image} alt={project.title} />
                        <ProjectContent>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">Link to Site</a>
                            </div>
                        </ProjectContent>
                    </ProjectItem>
                ))}
            </Section>
        </Element>
    );
};

export default Projects;