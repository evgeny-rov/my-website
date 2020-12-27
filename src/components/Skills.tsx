import React from 'react';
import useTypedTranslation from '../hooks/useTypedTranslation';
import { StyledSkills } from '../styled/mainSection';
import { mainSecChildAnims } from '../framer/animations';

export default () => {
  const { t } = useTypedTranslation();
  return (
    <StyledSkills variants={mainSecChildAnims}>
      <h2>{t('skills')}</h2>
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
