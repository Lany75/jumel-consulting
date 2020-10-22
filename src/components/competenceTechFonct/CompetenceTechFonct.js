import React from 'react';
import './CompetenceTechFonct.css';

const CompetenceTechFonct = ({nomCompetence, pourcentage})=>{
  return (
    <div className="box">
      <div id={pourcentage}>
        <div className="titre-competence">{nomCompetence}</div>
      </div>
    </div>
  )
}

export default CompetenceTechFonct;