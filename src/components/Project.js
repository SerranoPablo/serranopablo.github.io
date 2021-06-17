import React from 'react';
import '../styles/Project.css';
import Button from './Button.js';

function Project({ title, text, position, image, linkWeb, linkGH }) {
 return (
  <div className={`project ${(position == "left") ? "default" : "white"} `}>
   <div className={`project__box ${(position == "left") ? "left" : "right"} `}>
    <h4>{title}</h4>
    <p>{text}</p>
    <Button type="primary" title="Play" link={linkWeb} />
    <Button type="secondary" title="Code" link={linkGH} />

   </div>
   <div className="project__box picture">
    <img src={image} alt="" />
   </div>

  </div>
 )
}

export default Project
