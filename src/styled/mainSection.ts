import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { Small_Screen_Size } from './general';

export const MainSectionContainer = styled(motion.div)`
  position: absolute;
  top: 15%;
  width: min(50rem, 100%);
  height: 22rem;
  overflow-y: visible;

  @media(max-width: ${Small_Screen_Size}), (max-height: ${Small_Screen_Size}) {
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const StyledMainSection = styled(motion.section)`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'desc desc secondary'
    'projects projects secondary';

  h1, h2 {
    margin-block-start: 0;
    font-weight: 200;
    letter-spacing: 1px;
  }

  @media(max-width: ${Small_Screen_Size}), (max-height: ${Small_Screen_Size}) {
    padding-top: 7rem;
  }

  @media(max-width: ${Small_Screen_Size}) {
    grid-gap: 1rem;
    align-items: start;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'desc'
      'projects'
      'secondary';
  }
`;

export const StyledDescription = styled(motion.span)`
  grid-area: desc;
  justify-self: center;
  text-align: left;
  font-weight: 200;
  font-size: 1.25rem;
  letter-spacing: 0.5px;

  @media(max-width: ${Small_Screen_Size}) {
    font-size: 1.1rem;
  }
`;

export const StyledSkills = styled(motion.div)`
  grid-area: secondary;
  justify-self: end;
  display: grid;
  align-items: center;
  justify-items: end;
  text-align: right;

  h2 {
    font-size: 0.9rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 0.9rem;
  }

  @media(max-height: 400px), (max-width: ${Small_Screen_Size}) {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media(max-width: ${Small_Screen_Size}) {
    justify-self: start;
    text-align: left;
    place-items: start;

    li {
      font-size: 0.7rem;
    }
  }
`;

export const ProjectsSection = styled(motion.div)`
  grid-area: projects;
  justify-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;

  h1 {
    font-size: 1.1rem;
  }
`;

export const ProjectsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`;

export const StyledProject = styled.li`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media(max-width: ${Small_Screen_Size}) {
    width: 100%;
    padding: 0.2rem 0;
  }
`;

export const ProjectId = styled.span`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.2);
  text-decoration: underline;
`;

export const DemoLink = styled.a`
  font-size: 0.95rem;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  text-decoration: none;
  color: rgba(240, 220, 195, 1);
  transition: all .7s;

  &:hover {
    color: #f5f5f5;
  }
`;
