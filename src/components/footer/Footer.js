import React from 'react';
import './FooterDesktop.css';
import './FooterMobile.css';

const Footer = () => {
  return (
    <div id='footer'>
      <div id='rappel-menu'>
        <div>
          <a href="#transition-1" className="rappel-menu">Expertise</a>
        </div>
        <div>
          <a href="#transition-2" className="rappel-menu">Compétences</a>
        </div>
        <div>
          <a href="#transition-3" className="rappel-menu">Expériences</a>
        </div>
      </div>
      <div id='mention-legales'>
        Mentions Légales
      </div>
    </div>
  )
}

export default Footer;