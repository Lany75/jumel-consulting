import React from 'react';
import { CgArrowUpO } from 'react-icons/cg';
import './PortfolioDesktop.css';
import './PortfolioMobile.css';
import logoEngie from "../../images/Logo-Engie.jpg";
import LogoAxa from "../../images/Logo-Axa.png";
import LogoSG from "../../images/Logo-SG.jpg";
import LogoAmundi from "../../images/Logo-Amundi.png";
import LogoAtos from "../../images/Logo-Atos.png"
import IconRetour from '../iconRetour/IconRetour';

const Portfolio = () => {
  return(
    
  <div id="portfolio">
    <div id="text-portfolio">
      <div className="experiences">
        <div id="experience-1">
          <div className="entreprise-experience">
            <div><img className="logo-entreprise" src={logoEngie} alt="Engie" /></div>
            <div>ENGIE Global Markets</div>
          </div>
          <div className="poste-experience">Technical Lead</div>
        </div>

        <div id="experience-2">
          <div className="entreprise-experience">
            <div><img className="logo-entreprise" src={LogoAxa} alt="Axa" /></div>
            <div>AXA Life Invest</div>
          </div>
          <div className="poste-experience">Senior Software Engineer Team Lead</div>
        </div>

        <div id="experience-3">
          <div className="entreprise-experience">
            <div><img className="logo-entreprise" src={LogoSG} alt="Société Générale" /></div>
            <div>Societe Generale Corporate and Investment Banking</div>
          </div>
          <div className="poste-experience">Technical Lead</div>
        </div>
      </div>

      <div className="experiences">
        <div id="experience-4">
          <div className="entreprise-experience">
            <div><img className="logo-entreprise" src={LogoAmundi} alt="Amundi" /></div>
            <div>Amundi</div>
          </div>
          <div className="poste-experience">Senior J2Ee Developer</div>
        </div>

        <div id="experience-5">
          <div className="entreprise-experience">
            <div><img className="logo-entreprise" src={LogoAtos} alt="Atos" /></div>
            <div>Atos</div>
          </div>
          <div className="poste-experience">Information Technology Software Engineer</div>
        </div>
      </div>
    </div>

    <IconRetour />
  </div>
  )
}

export default Portfolio;