import React, { FunctionComponent } from 'react';
import { StyledMainSection } from '../styled/mainSection';

const MainSection: FunctionComponent = ({ children }) => {
  return (
    <StyledMainSection>
      {children}
    </StyledMainSection>
  );
}

export default MainSection;
