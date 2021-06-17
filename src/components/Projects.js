import React from 'react';
import '../styles/Projects.css';
import Project from './Project.js';
import ProjectList from '../db/ProjectList';

function Projects() {
 return (
  <div className="projects" id="projects">
   <h2>Projects</h2>
   {ProjectList.map(p =>
    <Project
     id={p.id}
     title={p.title}
     position={p.position}
     image={p.image}
     text={p.text}
     linkWeb={p.linkWeb}
     linkGH={p.linkGH} />
   )}
  </div>
 )
}

export default Projects
