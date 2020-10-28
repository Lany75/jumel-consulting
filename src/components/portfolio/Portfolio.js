import React from 'react';
import './PortfolioDesktop.css';
import './PortfolioMobile.css';
import logoEngie from "../../images/Logo-Engie.jpg";
import LogoAxa from "../../images/Logo-Axa.png";
import LogoSG from "../../images/Logo-SG.jpg";
import LogoAmundi from "../../images/Logo-Amundi.png";
import LogoAtos from "../../images/Logo-Atos.png"
import IconRetour from '../iconRetour/IconRetour';
import Experience from '../experience/Experience';

const Portfolio = () => {
  return(
    
  <div id="portfolio">
    <div id="text-portfolio">
      <div className="experiences">
        <Experience 
          idExperience="experience-1" 
          logoEntreprise={logoEngie} 
          altImage="Engie" 
          nomEntreprise="ENGIE Global Markets" 
          titrePoste="Technical Lead"
        />
        <Experience 
          idExperience="experience-2" 
          logoEntreprise={LogoAxa} 
          altImage="Axa" 
          nomEntreprise="AXA Life Invest" 
          titrePoste="Senior Software Engineer Team Lead"
        />
        <Experience 
          idExperience="experience-3" 
          logoEntreprise={LogoSG} 
          altImage="Société Générale" 
          nomEntreprise="Societe Generale Corporate and Investment Banking" 
          titrePoste="Technical Lead"
        />
      </div>

      <div className="experiences">
        <Experience 
          idExperience="experience-4" 
          logoEntreprise={LogoAmundi} 
          altImage="Amundi" 
          nomEntreprise="Amundi" 
          titrePoste="Senior J2Ee Developer"
        />
        <Experience 
          idExperience="experience-5" 
          logoEntreprise={LogoAtos} 
          altImage="Atos" 
          nomEntreprise="Atos" 
          titrePoste="Information Technology Software Engineer"
        />
      </div>
    </div>

    <IconRetour />
  </div>
  )
}

export default Portfolio;