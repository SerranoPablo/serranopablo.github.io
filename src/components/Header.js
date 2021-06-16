import React from 'react';
import '../styles/Header.css';
import avatar from '../images/avatar.jpeg';

function Header() {
 return (
  <div class="header">
   <div className="header__menu">
    <a href="#bio">Bio</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
   </div>
   <div class="wrapper">
    <div class="typewriter">
     Grüezi, I am
     <span style={{ fontSize: "2.5rem", color: "orange" }}> Pablo Serrano</span>
    </div>

   </div>
   <img className="header__avatar" src={avatar} alt="Avatar" />

  </div>
 )
}

export default Header
