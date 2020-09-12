import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components/macro';
import { motion } from 'framer-motion';

export const Small_Screen_Size = '450px'; 

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
    fill: rgba(240, 220, 195, 1);
    transition: all 0.5s;

    &:hover {
      fill: #f5f5f5;
      transform: rotate(360deg);
    }
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

export const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #f5f5f5;
  transition: all 0.7s;

  &:hover {
    color: rgba(240, 220, 195, 1);
  }
`;
