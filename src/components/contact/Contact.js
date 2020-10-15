import React from 'react';
import { CgArrowUpO } from 'react-icons/cg';
import './Contact.css';

const Contact = () => {
  return (
  <div id="contact">
    <div id="titre-contact">Contact</div>
    <div>
      <a href="#home" className="icon-retour">
        <CgArrowUpO />
      </a>
    </div>
  </div>
  )
}

export default Contact;