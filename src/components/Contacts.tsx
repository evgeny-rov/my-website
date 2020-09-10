import React, { FunctionComponent, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ContactOverlay,
  ContactInfo,
  StyledForm,
  InputText,
  StyledTextarea,
  StyledBtn,
  CloseBtn,
} from '../styled/contact';

const modalRoot: any = document.getElementById('modal-root');

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

interface Props {
  showContacts: Function;
}

const Contacts: FunctionComponent<Props> = ({ showContacts }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', state }),
    })
      .then(() => {
        alert('Your message was sent!');
        setState({ name: '', email: '', message: '' });
        showContacts(false);
      })
      .catch((error) => alert());

    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const contactContent = (
    <ContactOverlay animate={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }}>
      <CloseBtn type="button" value="x" onClick={() => showContacts(false)} />
      <ContactInfo>
        <p>Contact me via email: bitsinmyhead@gmail.com</p>
        <p>Or send me a message below</p>
      </ContactInfo>
      <StyledForm action="#" onSubmit={handleSubmit}>
        <label>
          <p>name:</p>
          <InputText
            type="text"
            name="name"
            required
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>email:</p>
          <InputText
            type="text"
            name="email"
            required
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>message:</p>
          <StyledTextarea
            name="message"
            required
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <StyledBtn type="submit" value="SEND" />
      </StyledForm>
    </ContactOverlay>
  );

  return ReactDOM.createPortal(contactContent, modalRoot);
};

export default Contacts;
