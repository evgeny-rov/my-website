import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Ubuntu Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
  object-fit: cover;
  z-index: -1;
`;