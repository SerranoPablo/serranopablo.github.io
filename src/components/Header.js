import React from 'react';
import '../styles/Header.css';
import avatar from '../images/avatar.jpeg';

function Header() {
 return (
  <div class="header">
   <div className="header__menu">
    <a href="#bio">Bio</a>
    <a href="">Projects</a>
    <a href="">Contact</a>
   </div>
   <p>Hello, I am</p>
   <h1>Pablo Serrano</h1>
   <img className="header__avatar" src={avatar} alt="Avatar" />


   <p>
    This is my portfolio
   </p>

  </div>
 )
}

export default Header
