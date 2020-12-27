import React from 'react';
import useTypedTranslation from '../hooks/useTypedTranslation';
import projects from '../data/projects';
import {
  ProjectsSection,
  ProjectsContainer,
  StyledProject,
  ProjectId,
  DemoLink,
} from '../styled/mainSection';
import { Link } from '../styled/general';
import { mainSecChildAnims } from '../framer/animations';
import { ReactComponent as GithubIcon } from '../assets/github-icon.svg';

export default () => {
  const { t } = useTypedTranslation();

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
      <h1>{t('projects')}</h1>
      <ProjectsContainer>{renderProjects()}</ProjectsContainer>
    </ProjectsSection>
  );
};
