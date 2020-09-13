import styled from 'styled-components/macro';
import { Overlay } from './general';

export const Wrapper = styled(Overlay)`
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 100;
  overflow-y: auto;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), #000 90%);
`;

export const Info = styled.div`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: min(20rem, 100%);

  input, textarea {
    margin: 1rem 0;
    padding: 0.5rem;
    background: none;
    border: 1px solid #f5f5f5;
    border-radius: 2px;
    color: #f5f5f5;
    transform: skewX(2deg)
  }
`;

export const TextField = styled.input`
  width: 100%;
  height: 2rem;
`;

export const Textarea = styled.textarea`
  height: 10rem;
  width: 100%;
`;

export const Btn = styled.input`
  width: 50%;
  height: 2rem;
  transition: all .5s;

  &:hover {
    background: #f5f5f5;
    color: #000;
  }
`;

export const CloseBtn = styled.input`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.8;
  background: none;
  border-radius: 2px;
  color: #fff;
  border: 1px solid #fff;
  transition: all .5s;

  &:hover {
    transform: scale(1.2);
    border: 1px solid #aaa;
    color: #aaa;
  }
`;
