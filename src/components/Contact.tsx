import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
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

interface Props {
  setShowContact: Function;
}

const modalRoot: any = document.getElementById('modal-root');

const Contact: FunctionComponent<Props> = ({ setShowContact }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    success: false,
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(state);
    setTimeout(() => {
      setState({ ...state, success: true });
    }, 5000);
  };

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const contactContent = (
    <ContactOverlay>
      <CloseBtn type="button" value="x" onClick={() => setShowContact(false)} />
      <StyledForm action="#" onSubmit={handleSubmit}>
        <ContactInfo>
          <p>Contact me via email: bitsinmyhead@gmail.com</p>
          <p>Or send me a message below</p>
        </ContactInfo>
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
        {state.success && <p>your message was sent</p>}
      </StyledForm>
    </ContactOverlay>
  );

  return ReactDOM.createPortal(contactContent, modalRoot);
};

export default Contact;
