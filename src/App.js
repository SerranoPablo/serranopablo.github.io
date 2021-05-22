import React from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import Bio from './components/Bio.js';
import Project from './components/Project.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Project title="ToDo App" position="left" />
      <Project title="Weather App" position="right" />

    </div>
  );
}

export default App;
