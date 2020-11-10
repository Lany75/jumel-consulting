import React from 'react';
import IconRetour from '../iconRetour/IconRetour';
import './ContactDesktop.css';
import './ContactMobile.css';
import './ContactTablet.css';

const Contact = () => {
  return (
  <div id="contact">
    <div id="titre-contact">Contact</div>
    <div id="text-contact">
      Pour toute demande d'information, envoyez nous un &nbsp;<a href="mailto:julien.rivat@jumel-consulting.fr">courriel</a>
  </div>
    <IconRetour />
  </div>
  )
}

export default Contact;