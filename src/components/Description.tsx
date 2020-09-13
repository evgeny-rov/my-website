import React from 'react';
import { StyledDescription } from '../styled/mainSection';
import { mainSecChildAnims } from '../framer/animations';

export default () => {
  return (
    <StyledDescription variants={mainSecChildAnims}>
      i am a frontend developer. i love to design, program and bring to live web
      apps, always eager to learn and make cool stuff, let's make something
      great together.
    </StyledDescription>
  );
};
