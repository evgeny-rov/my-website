import React from 'react';
import {
  ProjectsSection,
  ProjectsContainer,
  StyledProject,
  ProjectId,
  DemoLink,
} from '../styled/mainSection';
import { Link } from '../styled/general';
import projects from '../data/projects';
import { mainSecChildAnims } from '../framer/animations';
import { ReactComponent as GithubIcon } from '../assets/github-icon.svg';

export default () => {
  const renderProjects = () =>
    projects.map(({ id, name, description, demoURL, repoURL }, index) => {
      return (
        <StyledProject key={index}>
          <ProjectId>{id}</ProjectId>
          <DemoLink
            href={demoURL}
            target="_blank"
            title={description}
            rel="noopener noreferrer"
          >
            {name}
          </DemoLink>
          <Link
            href={repoURL}
            target="_blank"
            title="Link to github repository"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </Link>
        </StyledProject>
      );
    });

  return (
    <ProjectsSection variants={mainSecChildAnims}>
      <h1>projects</h1>
      <ProjectsContainer>{renderProjects()}</ProjectsContainer>
    </ProjectsSection>
  );
};
