import React, { useState } from 'react';
import { NavContainer, NavList, StyledLi } from '../styled/nav';
import { Link, SpecialLink } from '../styled/general';
import Contact from './Contact';

const MY_GITHUB_URL = 'https://github.com/evgeny-rov';

export default () => {
  const [showContact, setShowContact] = useState(true);

  return (
    <NavContainer
      animate={{ y: 0 }}
      initial={{ y: -2000 }}
      transition={{ type: 'spring', mass: 0.1, stiffness: 50, delay: 1.2 }}
    >
      <NavList>
        <StyledLi>
          <Link href={MY_GITHUB_URL} target="_blank" rel="noopener noreferrer">
            github
          </Link>
        </StyledLi>
        <StyledLi>
          {showContact && <Contact setShowContact={setShowContact}/>}
          <input
            type="button"
            onClick={() => setShowContact(!showContact)}
            value="contact"
          ></input>
        </StyledLi>
        <StyledLi>
          <SpecialLink href="#">hire me</SpecialLink>
        </StyledLi>
      </NavList>
    </NavContainer>
  );
};
