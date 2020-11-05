import React from 'react';
import './ExperienceDesktop.css';
import './ExperienceMobile.css';

const Experience = ({idExperience, logoEntreprise, altImage, nomEntreprise, titrePoste}) => {
  return (
    <div id={idExperience}>
      <div className="entreprise-experience">
        <div><img className="logo-entreprise" src={logoEntreprise} alt={altImage} /></div>
        <div>{nomEntreprise}</div>
      </div>
      <div className="poste-experience">{titrePoste}</div>
    </div>
  )
}

export default Experience;