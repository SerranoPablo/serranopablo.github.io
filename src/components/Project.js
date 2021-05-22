import React from 'react';
import '../styles/Project.css';

function Project({ title, position }) {
 return (
  <div className="project">
   <div className={`project__box ${(position == "left") ? "left" : "right"} `}>
    <p>{title}</p>
    <p>{position}</p>
   </div>
   <div className="project__box">
    <div className="project__boxImage">

    </div>
   </div>

  </div>
 )
}

export default Project
