import React, { useState } from 'react';
import useTypedTranslation from '../hooks/useTypedTranslation';
import Contacts from './Contacts';
import * as Nav from '../styled/nav';
import { navAnims } from '../framer/animations';

const MY_GITHUB_URL = 'https://github.com/evgeny-rov';

export default () => {
  const [showContacts, setshowContacts] = useState(false);
  const { t } = useTypedTranslation();

  console.log(t);

  return (
    <Nav.Container {...navAnims}>
      {showContacts && <Contacts showContacts={setshowContacts} />}
      <Nav.List>
        <Nav.Li>
          <Nav.Link
            href={MY_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </Nav.Link>
        </Nav.Li>
        <Nav.Li>
          <Nav.Btn onClick={() => setshowContacts(true)}>
            {t('contacts')}
          </Nav.Btn>
        </Nav.Li>
        <Nav.Li>
          <Nav.AccentBtn onClick={() => setshowContacts(true)}>
            {t('hireme')}
          </Nav.AccentBtn>
        </Nav.Li>
      </Nav.List>
    </Nav.Container>
  );
};
