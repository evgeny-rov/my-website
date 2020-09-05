import styled from 'styled-components/macro';
import { Link } from './general';

export const StyledMainSection = styled.section`
  box-sizing: border-box;
  position: absolute;
  top: 15%;
  width: 50rem;
  height: 22rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'desc desc secondary'
    'projects projects secondary';
  background-color: rgba(0, 0, 0, 0.1);
`;

export const StyledDescription = styled.span`
  justify-self: center;
  text-align: left;
  grid-area: desc;
`;

export const StyledSkills = styled.div`
  justify-self: end;
  display: grid;
  place-items: end;
  text-align: right;
  grid-area: secondary;
`;

export const ProjectsSection = styled.div`
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
`;

export const ProjectId = styled.span`
  font-size: 0.95rem;
  color: grey;
  text-decoration: underline;
`;

export const ProjectLink = styled(Link)`
  font-size: 0.95rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;