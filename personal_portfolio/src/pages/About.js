import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background-color: #ebe4e3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
`;

const Block = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: #333;
  font-size: 2rem;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.6;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Skill = styled.span`
  background: #94b4bc;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  font-size: 0.85rem;
`;

const InterestsList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #555;

  li {
    margin-bottom: 0.5rem;
  }
`;

const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Microsoft Office', 'Figma', 'Git', 'Adobe Softwares'];
  const interests = ['Game Development', 'Web Design', 'Digital Art', 'Technology Trends', 'Arts and Crafts'];

  return (
    <Element name="about">
      <Section>
        <ContentWrapper>

          {/* Bio Section */}
          <Block>
            <SectionTitle>About Me</SectionTitle>
            <Paragraph>
              I am currently a junior at UCF majoring in Digital Media: Web Design. I was previously on the Game Design track, which helped shape my passion for interactive, creative digital experiences. I enjoy bridging design and code to create clean, user-friendly interfaces.
            </Paragraph>
          </Block>

          {/* Skills Section */}
          <Block>
            <SectionTitle>Skills</SectionTitle>
            <SkillList>
              {skills.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </SkillList>
          </Block>

          {/* Interests Section */}
          <Block>
            <SectionTitle>Interests</SectionTitle>
            <InterestsList>
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </InterestsList>
          </Block>

        </ContentWrapper>
      </Section>
    </Element>
  );
};

export default About;