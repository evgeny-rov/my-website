import React from 'react';
import MainSection from './components/MainSection';
import Description from './components/Description';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { AppWrapper, Background } from './styled/general';
import bg from './assets/bg.jpg'

function App() {
  return (
    <AppWrapper>
      <Background src={bg} alt="background image"/>
      <MainSection>
        <Description />
        <Skills />
        <Projects />
      </MainSection>
    </AppWrapper>
  );
}

export default App;
