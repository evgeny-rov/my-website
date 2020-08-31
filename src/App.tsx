import React from 'react';
import { AppWrapper, Background } from './styled/general';
import bg from './assets/bg.jpg'

function App() {
  return (
    <AppWrapper>
      <Background src={bg} alt="background image"/>
      <span>hi</span>
    </AppWrapper>
  );
}

export default App;
