import React from 'react';
import { StyledDescription } from '../styled/mainSection';

const itemAnims: any = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default () => {
  return (
    <StyledDescription variants={itemAnims}>
      i am a frontend developer, always eager to learn and make stuff better,
      let's make something great.
    </StyledDescription>
  );
};
