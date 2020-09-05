import React from 'react';
import { ProjectsSection, ProjectsContainer, StyledProject, ProjectId, ProjectLink } from '../styled/mainSection';
import projects from '../data/projects';

export default () => {
  const renderProjects = () => (
    projects.map(({ visualId, name, demoURL }, id) => {
      return (
        <StyledProject key={id}>
          <ProjectId>{visualId}</ProjectId>
          <ProjectLink href={demoURL} target="_blank">{name}</ProjectLink>
        </StyledProject>
      );
    })
  );

  return (
    <ProjectsSection>
      <h1>projects</h1>
      <ProjectsContainer>
        {renderProjects()}
      </ProjectsContainer>
    </ProjectsSection>
  );
};
