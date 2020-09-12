import React, { FunctionComponent } from 'react';
import { StyledMainSection, MainSectionContainer } from '../styled/mainSection';
import { mainSecContainerAnims, mainSecAnims } from '../framer/animations';

const MainSection: FunctionComponent = ({ children }) => {
  return (
    <MainSectionContainer {...mainSecContainerAnims}>
      <StyledMainSection
        initial="initial"
        animate="animate"
        variants={mainSecAnims}
      >
        {children}
      </StyledMainSection>
    </MainSectionContainer>
  );
};

export default MainSection;
