import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { Small_Screen_Size } from './general';

export const Container = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 10;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 1rem;

  @media(max-width: ${Small_Screen_Size}) {
    justify-content: space-evenly;
    padding: 0;
  }
`;

export const Li = styled.li`
  padding: 0 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #f5f5f5;
  font-size: 1.20rem;
  letter-spacing: 1px;
  transition: all 0.7s;

  &:hover {
    color: rgba(240, 220, 195, 1);
  }
`;

export const Btn = styled.input`
  background: none;
  border: none;
  padding: 0;
  color: #f5f5f5;
  font-weight: 200;
  font-size: 1.20rem;
  letter-spacing: 1px;
  transition: all .5s;
  font-family: 'Roboto Mono', 'Ubuntu Mono', monospace;
  text-transform: uppercase;

  &:hover {
    color: rgba(240, 220, 195, 1);
  }
`;

export const AccentBtn = styled(Btn)`
  background: linear-gradient(20deg, rgba(200, 140, 95, 0.05), rgba(200, 140, 95, 0.2));
  padding: 0.5rem 1rem;

  &:hover {
    text-transform: capitalize;
  }
`;
