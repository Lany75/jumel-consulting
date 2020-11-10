import React from 'react';
import MentionsLegales from '../mentionsLegales/MentionsLegales';
import './FooterDesktop.css';
import './FooterMobile.css';
import './FooterTablet.css';

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
      <MentionsLegales />
    </div>
  )
}

export default Footer;