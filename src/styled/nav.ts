import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.nav)`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-left: 2.5rem;
`;
