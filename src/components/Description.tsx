import React from 'react';
import { StyledDescription } from '../styled/mainSection';
import { sectionChildAnims } from '../framer/animations';

export default () => {
  return (
    <StyledDescription variants={sectionChildAnims}>
      i am a frontend developer, always eager to learn and make stuff better,
      let's make something great.
    </StyledDescription>
  );
};
