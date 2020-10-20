import React from 'react';
import { CgArrowUpO } from 'react-icons/cg';
import './PortfolioDesktop.css';
import './PortfolioMobile.css';
import logoEngie from "../../images/Logo-Engie.jpg";
import LogoAxa from "../../images/Logo-Axa.png";
import LogoSG from "../../images/Logo-SG.jpg";
import LogoAmundi from "../../images/Logo-Amundi.png";
import LogoAtos from "../../images/Logo-Atos.png"

const Portfolio = () => {
  return(
    
  <div id="portfolio">
    <div id="titre-portfolio">Portfolio</div>
    <div id="text-portfolio">
      <div className="experiences">
      <div id="experience-1">
        <div className="entreprise-experience">
          <div><img className="logo-entreprise" src={logoEngie} alt="Engie" /></div>
          <div>ENGIE Global Markets</div>
        </div>
        <div className="poste-experience">Technical Lead</div>
        <div className="mission-experience">
          <ul>
            <li>Conception et Développement d'un ensemble de librairies .NET pour la mise en place de microservices et d'API REST</li>
            <li>Conception et Développement d'un ETL pour la collecte et l'ingestion de données vers un agrégateur multidimensionnel OLAP</li>
            <li>Mise en place de pipeline CI/CD sur Azure DevOps</li>
            <li>Environnement technique : C#, WPF, REST, WebAPI, DevExpress, MongoDB, Azure DevOps, Datalake, ETL, RabbitMQ</li>
            <li>Environnement fonctionnel : VaR, PnL, Risk Analysis</li>
          </ul>
        </div>
      </div>
      <div id="experience-2">
        <div className="entreprise-experience">
          <div><img className="logo-entreprise" src={LogoAxa} alt="Axa" /></div>
          <div>AXA Life Invest</div>
        </div>
        <div className="poste-experience">Senior Software Engineer Team Lead</div>
        <div className="mission-experience">
          <ul>
            <li>Développement d'une plateforme de gestion de produits d'assurance vie en .NET</li>
            <li>Mise en place d'une plateforme de continuous delivery</li>
            <li>Encadrement d'une équipe projet de 6 personnes</li>
            <li>Architecture de SI</li>
            <li>Conception et Développement de librairies pour le développement d'application .NET reposant sur une architecture SOA associant WCF et WPF</li>
            <li>Environnement technique : C#, WPF, Workflow Foundation, DevExpress, Oracle, SVN, WCF, Grid Computing, CruiseControl</li>
            <li>Environnement fonctionnel : Assurance, ICPPI</li>
          </ul>
        </div>
      </div>
      <div id="experience-3">
        <div className="entreprise-experience">
          <div><img className="logo-entreprise" src={LogoSG} alt="Société Générale" /></div>
          <div>Societe Generale Corporate and Investment Banking</div>
        </div>
        <div className="poste-experience">Technical Lead</div>
        <div className="mission-experience">
          <ul>
            <li>Développement et maintenance évolutive sur la plateforme de deal lifecycle dédiée aux options de changes Enterprise</li>
            <li>Mise en place d'un bridge temps réel entre XOne et Enterprise</li>
            <li>Environnement technique J2EE : JAVA, Jide, Swing, Spring, Hibernate, Sybase, CVS, RMI, Tibco EMS </li>
            <li>Environnement technique .NET : C#, WCF, WinForms, Infragistics, Sybase, Oracle, Tibco RV, Tibco EMS</li>
            <li>Environnement fonctionnel : Options de change, Pricing intéractif, Tenue de position, Deal Lifecycle, Produits Exotiques, Produits Structurés</li>
          </ul>
        </div>
      </div>
      </div>
      <div className="experiences">
      <div id="experience-4">
        <div className="entreprise-experience">
          <div><img className="logo-entreprise" src={LogoAmundi} alt="Amundi" /></div>
          <div>Amundi</div>
        </div>
        <div className="poste-experience">Senior J2Ee Developer</div>
        <div className="mission-experience">
          <ul>
            <li>Développement et maintenance évolutive sur les modules Credit Risk de l'application Media+</li>
            <li>Conception et Développement du module de scoring ISR de l'application Media+</li>
            <li>Environnement technique : Java 1.4/1.6, SWING, Sybase</li>
            <li>Environnement fonctionnel : Asset Management, Risque de crédit, ISR</li>
          </ul>
        </div>
      </div>
      <div id="experience-5">
        <div className="entreprise-experience">
          <div><img className="logo-entreprise" src={LogoAtos} alt="Atos" /></div>
          <div>Atos</div>
        </div>
        <div className="poste-experience">Information Technology Software Engineer</div>
        <div className="mission-experience">
          <ul>
            <li>Conception technique en UML de l'application d'attribution des aides à l'AESN</li>
            <li>Développement d'une application n-tiers J2EE avec une approche pilotée par le modèle (MDA)</li>
            <li>Environnement technique : J2EE, Axis, Web-Services, Spring, Hibernate, Struts, Maven, Subversion, CruiseControl, Oracle</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    <div className="icon-retour">
      <a href="#home" >
        <CgArrowUpO />
      </a>
    </div>
  </div>
  )
}

export default Portfolio;