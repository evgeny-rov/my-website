import React, { FunctionComponent, ChangeEvent, useState } from 'react';
import ReactDOM from 'react-dom';
import { submitForm } from '../utils/formSubmission';
import * as Contacts from '../styled/contacts';
import { contactsAnims } from '../framer/animations';

const modalRoot: any = document.getElementById('modal-root');

interface Props {
  showContacts: Function;
}

const ContactsModal: FunctionComponent<Props> = ({ showContacts }) => {
  const [state, setState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.SyntheticEvent) => {
    const onSuccess = () => {
      alert('Your message was sent!');
      setState({ name: '', email: '', message: '' });
      showContacts(false);
    };

    const onError = () => alert('Something went wrong, try again');

    submitForm(state, onSuccess, onError);
    e.preventDefault();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const contactsContent = (
    <Contacts.Wrapper {...contactsAnims}>
      <Contacts.CloseBtn
        type="button"
        value="x"
        onClick={() => showContacts(false)}
      />
      <Contacts.Info>
        <p>Contact me via email: evgenyrov.me@gmail.com</p>
        <p>Or send me a message below</p>
      </Contacts.Info>
      <Contacts.Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <label>
          name:
          <Contacts.TextField
            type="text"
            name="name"
            required
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label>
          email:
          <Contacts.TextField
            type="email"
            name="email"
            required
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label>
          message:
          <Contacts.Textarea
            name="message"
            required
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <Contacts.Btn type="submit" value="SEND" />
      </Contacts.Form>
    </Contacts.Wrapper>
  );

  return ReactDOM.createPortal(contactsContent, modalRoot);
};

export default ContactsModal;
