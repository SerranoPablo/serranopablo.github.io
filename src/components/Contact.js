import React from 'react';
import '../styles/Contact.css';
import Button from './Button';

function Contact() {
 return (
  <div className="contact" id="contact">
   <h2>Contact</h2>
   <div className="contact__column">

    <div className="contact__row">
     <div className="contact__field">
      <h4>LinkedIn:</h4>
      <p>Pablo Serrano</p>
      <Button type="primary" title="LinkedIn" link="https://www.linkedin.com/in/pablo-serrano-44b044169/" />
     </div>
    </div>

    <div className="contact__row">
     <div className="contact__field">
      <h4>Email:</h4>
      <p>Pablo.s.toro@gmail.com</p>
      <Button className="button" type="secondary" title="Email me" link="mailto:pablo.s.toro@gmail.com?subject=GitHub%20Portfolio&body=Hi%20Pablo%2C%0D%0AJust%20saw%20your%20GitHub%20Portfolio%20and%20wanted%20to%20discuss%20with%20you%20about..." />
     </div>
    </div>



   </div>

  </div >
 )
}

export default Contact
