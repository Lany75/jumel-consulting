import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import './DomaineCompetenceDesktop.css';
import './DomaineCompetenceMobile.css';

const DomaineCompetence = ({nomCompetence})=> {
 return (
  <div className="competence">
    <div className='icon-skill'><HiShieldCheck /></div>
    <div>{nomCompetence}</div>
  </div>
 )
}

export default DomaineCompetence;