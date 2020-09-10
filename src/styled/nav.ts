import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.nav)`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 10;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;

  @media(max-width: 450px) {
    justify-content: center;
  }
`;

export const StyledLi = styled.li`
  margin-left: min(2.5rem, 5%);
`;

export const StyledBtn = styled.input`
  background: none;
  border: none;
  font-weight: 200;
  font-size: 1.25rem;
  letter-spacing: 1px;
  color: #f5f5f5;
  transition: all .5s;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;

  &:hover {
    color: rgba(240, 220, 195, 1);
  }
`;

export const AccentBtn = styled(StyledBtn)`
  background: linear-gradient(20deg, rgba(200, 140, 95, 0.05), rgba(200, 140, 95, 0.2));
  padding: 0.5rem 1rem;

  &:hover {
    text-transform: capitalize;
  }
`;
