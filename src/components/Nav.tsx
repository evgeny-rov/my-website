import React, { useState } from 'react';
import Contacts from './Contacts';
import * as Nav from '../styled/nav';
import { navAnims } from '../framer/animations';

const MY_GITHUB_URL = 'https://github.com/evgeny-rov';

export default () => {
  const [showContacts, setshowContacts] = useState(false);

  return (
    <Nav.Container {...navAnims}>
      {showContacts && <Contacts showContacts={setshowContacts} />}
      <Nav.List>
        <Nav.Li>
          <Nav.Link href={MY_GITHUB_URL} target="_blank" rel="noopener noreferrer">
            github
          </Nav.Link>
        </Nav.Li>
        <Nav.Li>
          <Nav.Btn
            type="button"
            value="contacts"
            onClick={() => setshowContacts(true)}
          />
        </Nav.Li>
        <Nav.Li>
          <Nav.AccentBtn
            type="button"
            value="hire me"
            onClick={() => setshowContacts(true)}
          />
        </Nav.Li>
      </Nav.List>
    </Nav.Container>
  );
};
