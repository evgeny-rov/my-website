import React from 'react';
import MainSection from './components/MainSection';
import Description from './components/Description';
import Skills from './components/Skills';
import Nav from './components/Nav';
import Projects from './components/Projects';
import { Overlay, Background } from './styled/general';
import bg from './assets/bg.jpg';

function App() {
  return (
    <Overlay>
      <Background src={bg} alt="background image" />
      <Nav />
      <MainSection>
        <Description />
        <Projects />
        <Skills />
      </MainSection>
    </Overlay>
  );
}

export default App;
