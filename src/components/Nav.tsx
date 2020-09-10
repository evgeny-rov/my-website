import React, { useState } from 'react';
import {
  NavContainer,
  NavList,
  StyledLi,
  StyledBtn,
  AccentBtn,
} from '../styled/nav';
import { Link } from '../styled/general';
import Contact from './Contacts';

const MY_GITHUB_URL = 'https://github.com/evgeny-rov';

export default () => {
  const [showContact, setShowContact] = useState(false);

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
          {showContact && <Contact showContacts={setShowContact} />}
          <StyledBtn
            type="button"
            value="contacts"
            onClick={() => setShowContact(true)}
          />
        </StyledLi>
        <StyledLi>
          <AccentBtn
            type="button"
            value="hire me"
            onClick={() => setShowContact(true)}
          />
        </StyledLi>
      </NavList>
    </NavContainer>
  );
};
