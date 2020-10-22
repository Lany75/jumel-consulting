import React from 'react';
import CompetenceTechFonct from '../competenceTechFonct/CompetenceTechFonct';
import DomaineCompetence from '../domaineCompetence/DomaineCompetence';
import IconRetour from '../iconRetour/IconRetour';
import './SkillsDesktop.css';
import './SkillsMobile.css';

const Skills = () => {
  return (
  <div id="skills">
    <div id="text-skills">
      <div className="skills">
        <div className="titre-skills">Domaines de compétences</div>
        <div id='domaine-competence'>
          <DomaineCompetence nomCompetence="Méthode Agiles" />
          <DomaineCompetence nomCompetence="Architecture" />
          <DomaineCompetence nomCompetence=".NET" />
          <DomaineCompetence nomCompetence="Sybase" />
          <DomaineCompetence nomCompetence="GIT" />
          <DomaineCompetence nomCompetence="SQL" />
          <DomaineCompetence nomCompetence="Base de données" />
          <DomaineCompetence nomCompetence="Oracle" />
          <DomaineCompetence nomCompetence="Visual Studio" />
          <DomaineCompetence nomCompetence="Microsoft SQL Server" />
          <DomaineCompetence nomCompetence="Microsoft Azure" />
          <DomaineCompetence nomCompetence="Azure DevOps" />
          <DomaineCompetence nomCompetence="OData" />

        </div>
      </div>
      <div className="skills">
        <div className="titre-skills">Compétences techniques</div>
        <div id="competence-tech">
          <CompetenceTechFonct nomCompetence="C#" pourcentage="competence-100" />
          <CompetenceTechFonct nomCompetence="WPF" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="REST" pourcentage="competence-100" />
          <CompetenceTechFonct nomCompetence="WebAPI" pourcentage="competence-100" />
          <CompetenceTechFonct nomCompetence="MongoDB" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="Azure DevOps" pourcentage="competence-100" />
          <CompetenceTechFonct nomCompetence="Datalake" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="Winforms" pourcentage="competence-60" />
          <CompetenceTechFonct nomCompetence="RabbitMQ" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="Oracle" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="WCF" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="Web Service" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="J2EE" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="Java" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="Spring" pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence="Sybase" pourcentage="competence-80" />
        </div>
  
    </div>
      <div className="skills">
        <div className="titre-skills">Compétences fonctionnelles</div>
        <div id="competence-fonct">
        <CompetenceTechFonct nomCompetence="VaR" pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence="PnL" pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence="Risk Analysis" pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence="Assurance" pourcentage="competence-60" />
        <CompetenceTechFonct nomCompetence="Asset Management" pourcentage="competence-60" />
        <CompetenceTechFonct nomCompetence="Risque de crédit" pourcentage="competence-60" />
        <CompetenceTechFonct nomCompetence="ISR" pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence="Option de change" pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence="Pricing intéractif" pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence="Deal Lifecycle" pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence="Produits exotiques" pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence="Produits structurés" pourcentage="competence-60" />
        </div>
      </div>
    </div>
    <IconRetour />
  </div>
  )
}

export default Skills;