import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const MainSectionContainer = styled(motion.div)`
  position: absolute;
  top: 15%;
  width: min(50rem, 100%);
  height: 22rem;
  border-radius: 2px;


  @media(max-width: 450px) {
    top: 0;
    height: 100%;
  }
`;

export const StyledMainSection = styled(motion.section)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'desc desc secondary'
    'projects projects secondary';

    @media(max-width: 450px) {
      place-items: center;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
        'desc'
        'projects'
        'secondary';
    }
`;

export const StyledDescription = styled(motion.span)`
  justify-self: center;
  text-align: left;
  grid-area: desc;
`;

export const StyledSkills = styled(motion.div)`
  justify-self: end;
  display: grid;
  place-items: end;
  text-align: right;
  grid-area: secondary;

  @media(max-width: 450px) {
    justify-self: start;
    text-align: left;
    place-items: start;
  }
`;

export const ProjectsSection = styled(motion.div)`
  justify-self: baseline;
  grid-area: projects;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

  @media(max-width: 450px) {
    width: 100%;
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
  color: #f5f5f5;
  transition: all .7s;

  &:hover {
    color: rgba(240, 220, 195, 1);
  }
`;
