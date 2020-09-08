import React from 'react';
import { NavContainer, NavList, ListItem } from '../styled/nav';
import { Link, SpecialLink } from '../styled/general';

const MY_GITHUB_URL = 'https://github.com/evgeny-rov';

export default () => {
  return (
    <NavContainer
      animate={{ y: 0 }}
      initial={{ y: -2000 }}
      transition={{ type: 'spring', mass: 0.1, stiffness: 50, delay: 1.2 }}
    >
      <NavList>
        <ListItem>
          <Link href={MY_GITHUB_URL} target="_blank">
            github
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/">contacts</Link>
        </ListItem>
        <ListItem>
          <SpecialLink href="#">hire me</SpecialLink>
        </ListItem>
      </NavList>
    </NavContainer>
  );
};
