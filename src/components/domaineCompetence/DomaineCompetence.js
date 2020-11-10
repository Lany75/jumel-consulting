import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import './DomaineCompetenceDesktop.css';
import './DomaineCompetenceMobile.css';
import './DomaineCompetenceTablet.css';

const DomaineCompetence = ({nomCompetence})=> {
 return (
  <div className="competence">
    <div className='icon-skill'><HiShieldCheck /></div>
    <div className='nom-competence'>{nomCompetence}</div>
  </div>
 )
}

export default DomaineCompetence;