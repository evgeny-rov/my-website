import React from 'react';
import { StyledDescription } from '../styled/mainSection';
import { mainSecChildAnims } from '../framer/animations';

export default () => {
  return (
    <StyledDescription variants={mainSecChildAnims}>
      i am a frontend developer, always eager to learn and make stuff better,
      let's make something great.
    </StyledDescription>
  );
};
