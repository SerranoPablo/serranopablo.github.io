import React from 'react';
import '../styles/Project.css';
import Button from './Button.js';

function Project({ title, text, position, image }) {
 return (
  <div className={`project ${(position == "left") ? "default" : "white"} `}>
   <div className={`project__box ${(position == "left") ? "left" : "right"} `}>
    <p>{title}</p>
    <p>{text}</p>
    <Button type="primary" title="Play" />
    <Button type="secondary" title="View code" />

   </div>
   <div className="project__box">
    <img src={image} alt="" />
   </div>

  </div>
 )
}

export default Project
