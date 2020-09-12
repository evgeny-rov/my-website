import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components/macro';

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
  }

  h1, h2, p, span, a {
    font-weight: 200;
    font-size: 1.25rem;
    letter-spacing: 1px;
  }

  p {
    font-size: 0.87rem;
    margin: 0;
  }

  h1, h2 {
    margin-block-start: 0;
  }

  h2 {
    font-size: 0.9rem;
  }

  svg {
    fill: rgba(240, 220, 195, 1);
    transition: all 1s;

    &:hover {
      fill: #f5f5f5;
      transform: rotate(360deg);
    }
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
