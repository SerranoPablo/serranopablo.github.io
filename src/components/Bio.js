import React from 'react';
import '../styles/Bio.css';

function Bio() {
 return (
  <div className="bio">
   <h3 id='bio'>Bio</h3>

   <div className="bio__row">
    <div className="bio__info">
     <div className="bio__field">
      <h4>Currently:</h4>
      <p>IT Engineer Student</p>
     </div>
     <div className="bio__field">
      <h4>Skills:</h4>
      <p>HTML, CSS, JS, React.js, Java, SQL</p>
     </div>
     <div className="bio__field">
      <h4>Address:</h4>
      <p>Riehen, BS</p>
     </div>
     <div className="bio__field">
      <h4>Origin:</h4>
      <p>Spain</p>
     </div>
     <div className="bio__field">
      <h4>Languages:</h4>
      <p>English, German, French, Spanish</p>
     </div>
    </div>

    <div className="bio__story">
     <h3>My story</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempore quia error necessitatibus quaerat, ipsam minima repudiandae temporibus quo maxime repellat fuga odit eius aspernatur adipisci odio ea consectetur unde.</p>
    </div>
   </div>



  </div>
 )
}

export default Bio;
