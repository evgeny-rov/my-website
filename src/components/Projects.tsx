import React from 'react';
import { ProjectsWrapper, ProjectsContainer, StyledProject } from '../styled/mainContent';

export default () => {
  return (
    <ProjectsWrapper>
      <h2>projects</h2>
      <ProjectsContainer>
        <StyledProject>
          <span>01</span>
          <a href="https://evgeny-rov.github.io/the-chompus-game/">the chompus game</a>
        </StyledProject>
        <StyledProject>
          <span>02</span>
          <a href="https://evgeny-rov.github.io/the-chompus-game/">in24</a>
        </StyledProject>
        <StyledProject>
          <span>03</span>
          <a href="https://evgeny-rov.github.io/the-chompus-game/">ava-assistant</a>
        </StyledProject>
        <StyledProject>
          <span>04</span>
          <a href="https://evgeny-rov.github.io/the-chompus-game/">3d dice roller</a>
        </StyledProject>
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};
