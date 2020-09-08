import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components/macro';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 1.25rem;
    letter-spacing: 1px;
  }

  p {
    font-size: 0.87rem;
    margin: 0;
  }

  h1, h2 {
    font-weight: 200;
    margin-block-start: 0;
  }

  h1 {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 0.9rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
`;

export const AppWrapper = styled(Overlay)`
  color: #f5f5f5;
`;

export const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Link = styled(motion.a)`
  text-decoration: none;
  color: #f5f5f5;
  transition: all 0.7s;
`;

export const SpecialLink = styled(Link)`
  background: linear-gradient(20deg, rgba(200, 140, 95, 0.05), rgba(200, 140, 95, 0.2));
  padding: 0.5rem 1rem;
  transition: all .5s;
  
  &:hover {
    text-transform: capitalize;
  }
`;



//text-shadow: -5px -5px 0 rgba(245, 77, 83, 0.5), 5px 5px 0 rgba(58, 245, 241, 0.5);
//-5px -5px 0 rgba(245, 77, 83, 0.5), 5px 5px 0 rgba(58, 245, 241, 0.5)
//color: rgba(0, 255, 255, 0.7);
//text-shadow: 2px 2px 0 rgba(245, 77, 83, 1), 2px -2px 0 rgba(58, 245, 241, 1);
//color: #f5f5f5;
//rgba(117, 234, 207, 0.39)
// background-color: rgba(50, 100, 250, 0.2);