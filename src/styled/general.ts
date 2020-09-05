import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components/macro';

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
`;

export const AppWrapper = styled(Overlay)`
  color: white;
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
  color: #fff;
  transition: all .5s;

  &:hover {
    color: cyan;
  }
`;
