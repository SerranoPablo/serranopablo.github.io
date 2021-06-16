import React from 'react';
import '../styles/Button.css';

function Button({ type, title, link }) {
 return (
  <div >
   <button className={`button ${(type == "primary") ? "primary" : "secondary"} `}
    onClick={event => window.open(
     link,
     '_blank' // <- This is what makes it open in a new window.
    )}
   >
    {title}
   </button>
  </div>
 )
}

export default Button
