import React from 'react';
import '../styles/Bio.css';

function Bio() {
 return (
  <div className="bio">
   <h2 id='bio'>Bio</h2>

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
      <p>Riehen BS</p>
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
     <p>Currently looking for an entry level position in IT while I pursue an IT Engineering Bachelor online. <br /><br />
     Used to work in scientific research but I realised my passion was in programming. Since then I have been learning as much as possible and I adore the field.<br /><br />
      I have been focusing on React.js but I am open to learning new skills.</p>
    </div>
   </div>



  </div>
 )
}

export default Bio;
