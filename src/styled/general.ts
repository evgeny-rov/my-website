import styled from 'styled-components/macro';
import { createGlobalStyle, keyframes } from 'styled-components/macro';
import { motion } from 'framer-motion';
import bg from '../assets/bgv2.jpg';

export const Small_Screen_Size = '600px';

const pulse = keyframes`
  from {
    transform: scale(1);
    fill: rgba(240, 220, 195, 1);
  }

  to {
    transform: scale(1.3);
    fill: #f5f5f5;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto Mono', 'Ubuntu Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: uppercase;
    font-weight: 200;
    background: #000;
  }

  svg {
    fill: rgba(240, 220, 195, 0.7);
    transition: all 0.5s;
    animation: ${pulse} 2s ease-in-out infinite alternate;
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
  z-index: 1;
`;

export const AppWrapper = styled(Overlay)`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #f5f5f5;
  transition: all 0.7s;
  display: grid;
  place-items: center;

  &:hover {
    color: rgba(240, 220, 195, 1);
  }
`;
