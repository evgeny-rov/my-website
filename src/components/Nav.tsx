import React from 'react';
import { NavContainer, NavList, ListItem } from '../styled/nav';
import { Link } from '../styled/general';

const MY_GITHUB_URL = 'https://github.com/evgeny-rov';

export default () => {
  return (
    <NavContainer>
      <NavList>
        <ListItem>
          <Link href={MY_GITHUB_URL} target="_blank">github</Link>
        </ListItem>
        <ListItem>
          <Link href="/">contacts</Link>
        </ListItem>
        <ListItem>
          <Link href="#">hire me</Link>
        </ListItem>
      </NavList>
    </NavContainer>
  );
};
