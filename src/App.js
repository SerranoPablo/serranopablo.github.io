import React from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import Bio from './components/Bio.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Projects />
      <Contact />


    </div>
  );
}

export default App;
