import React from 'react';
import { StyledSkills } from '../styled/mainSection';

const itemAnims: any = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default () => {
  return (
    <StyledSkills variants={itemAnims}>
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
