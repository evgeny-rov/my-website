import React from 'react';
import useTypedTranslation from '../hooks/useTypedTranslation';
import { StyledDescription } from '../styled/mainSection';
import { mainSecChildAnims } from '../framer/animations';

export default () => {
  const { t } = useTypedTranslation();

  return (
    <StyledDescription variants={mainSecChildAnims}>
      {t('description')}
    </StyledDescription>
  );
};

// i am a frontend developer. i love to design and bring to live web
//       apps, always eager to learn and make cool stuff, let's make something
//       great together.