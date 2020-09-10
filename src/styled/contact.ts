import styled from 'styled-components/macro';
import { Overlay } from './general';
import { motion } from 'framer-motion';

export const ContactOverlay = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(200, 140, 95, 1) 90%);
  flex-direction: column;
  box-sizing: border-box;
  z-index: 100;
  overflow-y: auto;
  
  p {
    font-weight: 300;
  }
`;

export const CloseBtn = styled.input`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #fff;
  opacity: 0.8;
  border-radius: 5px;
  color: #000;
  border: none;

  &:hover {
    box-shadow: 0 0 10px #aaa;
    color: #aaa;
  }
`;

export const ContactInfo = styled.div`
  text-align: center;

  p {
    margin: 2rem;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  width: 20rem;
  place-items: center;
  grid-gap: 1rem;
  align-self: center;
  margin-top: 3rem;

  label {
    width: 100%;
  }

  input, textarea {
    border: none;
    background: #f5f5f5;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 1rem 0;
    padding: 0.5rem;
  }
`;

export const InputText = styled.input`
  width: 100%;
  height: 2rem;
`;

export const StyledTextarea = styled.textarea`
  height: 10rem;
  width: 100%;
`;

export const StyledBtn = styled.input`
  color: black;
  width: 100%;
  height: 2rem;

  &:hover {
    box-shadow: 0 0 10px #aaa;
    color: #aaa;
  }
`;