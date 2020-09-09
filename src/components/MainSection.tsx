import React, { FunctionComponent } from 'react';
import { StyledMainSection, MainSectionContainer } from '../styled/mainSection';
import { containerAnims, sectionAnims } from '../framer/animations';

const MainSection: FunctionComponent = ({ children }) => {
  return (
    <MainSectionContainer {...containerAnims}>
      <StyledMainSection
        initial="initial"
        animate="animate"
        variants={sectionAnims}
      >
        {children}
      </StyledMainSection>
    </MainSectionContainer>
  );
};

export default MainSection;
