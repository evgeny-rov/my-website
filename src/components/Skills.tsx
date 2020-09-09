import React from 'react';
import { StyledSkills } from '../styled/mainSection';
import { sectionChildAnims } from '../framer/animations';

export default () => {
  return (
    <StyledSkills variants={sectionChildAnims}>
      <h2>skills</h2>
      <p>typescript</p>
      <p>javascript</p>
      <p>html</p>
      <p>css</p>
      <p>react</p>
      <p>redux</p>
      <p>reselect</p>
      <p>styled-components</p>
      <p>pwa</p>
      <p>webpack</p>
      <p>three.js</p>
      <p>phaser</p>
    </StyledSkills>
  );
};
