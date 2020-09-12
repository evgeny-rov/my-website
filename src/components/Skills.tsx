import React from 'react';
import { StyledSkills } from '../styled/mainSection';
import { mainSecChildAnims } from '../framer/animations';

export default () => {
  return (
    <StyledSkills variants={mainSecChildAnims}>
      <h2>skills</h2>
      <ul>
        <li>typescript</li>
        <li>javascript</li>
        <li>html</li>
        <li>css</li>
        <li>react</li>
        <li>redux</li>
        <li>reselect</li>
        <li>styled-components</li>
        <li>pwa</li>
        <li>webpack</li>
        <li>three.js</li>
        <li>phaser</li>
      </ul>
    </StyledSkills>
  );
};
