import React from 'react';
import './i18n';
import MainSection from './components/MainSection';
import Description from './components/Description';
import Skills from './components/Skills';
import Nav from './components/Nav';
import Projects from './components/Projects';
import { AppWrapper } from './styled/general';

function App() {
  return (
    <AppWrapper>
      <Nav />
      <MainSection>
        <Description />
        <Projects />
        <Skills />
      </MainSection>
    </AppWrapper>
  );
}

export default App;
