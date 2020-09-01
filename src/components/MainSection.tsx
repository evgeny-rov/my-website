import React, { FunctionComponent } from 'react';
import { StyledMainSection } from '../styled/mainContent';

const MainSection: FunctionComponent = ({ children }) => {
  return (
    <StyledMainSection>
      {children}
    </StyledMainSection>
  );
}

export default MainSection;
