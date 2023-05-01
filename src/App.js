import React from 'react';
import './App.css';
import ParticleBg from './animation_components/ParticleBg';
import Typewriter from './animation_components/Typewriter';
import InitialTransition from './animation_components/InitialTransition';


function App() {
  return (
    <div className="App" >
      <InitialTransition />  
      <ParticleBg />
      <header className="App-header">
      </header>
      <body className="App-body"></body>
    </div>
  );
}

export default App;
