import React from 'react';
import { CgArrowUpO } from 'react-icons/cg';
import {HiShieldCheck} from 'react-icons/hi'
import './SkillsDesktop.css';
import './SkillsMobile.css';

const Skills = () => {
  return (
  <div id="skills">
    <div id="text-skills">
      <div className="skills">
        <div className="titre-skills">Domaines de compétences</div>
        <div id='domaine-competence'>
          <div className='icon-skill'><HiShieldCheck />Méthode Agiles</div>
          <div className='icon-skill'><HiShieldCheck />Architecture</div>
          <div className='icon-skill'><HiShieldCheck />.NET</div>
          <div className='icon-skill'><HiShieldCheck />Sybase</div>
          <div className='icon-skill'><HiShieldCheck />GIT</div>
          <div className='icon-skill'><HiShieldCheck />SQL</div>
          <div className='icon-skill'><HiShieldCheck />Base de données</div>
          <div className='icon-skill'><HiShieldCheck />Oracle</div>
          <div className='icon-skill'><HiShieldCheck />Visual Studio</div>
          <div className='icon-skill'><HiShieldCheck />Microsoft SQL Server</div>
          <div className='icon-skill'><HiShieldCheck />Microsoft Azure</div>
          <div className='icon-skill'><HiShieldCheck />Azure DevOps</div>
          <div className='icon-skill'><HiShieldCheck />OData</div>

        </div>
       { /*<ul>
          <li>Méthodes Agiles</li>
          <li>Architecture</li>
          <li>.NET</li>
          <li>Sybase</li>
          <li>GIT</li>
          <li>SQL</li>
          <li>Base de données</li>
          <li>Oracle</li>
          <li>Visual Studio</li>
          <li>Microsoft SQL Server</li>
          <li>Microsoft Azure</li>
          <li>Azure DevOps</li>
          <li>OData</li>
       </ul>*/}
      </div>
      <div className="skills">
        <div className="titre-skills">Compétences techniques</div>
        <div className="box-competence">
          <div className="box-essai">
            <div className="box-essai-titre">C#</div>
            <div className="pourcentage-100">100%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">WPF</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">REST</div>
            <div className="pourcentage-100">100%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">WebAPI</div>
            <div className="pourcentage-100">100%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">MongoDB</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">Azure DevOps</div>
            <div className="pourcentage-100">100%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">Datalake</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">Winforms</div>
            <div className="pourcentage-60">60%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">RabbitMQ</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">Oracle</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">WCF</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">Web Service</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">J2EE</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">Java</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">Spring</div>
            <div className="pourcentage-80">80%</div>
          </div>
          <div className="box-essai">
            <div className="box-essai-titre">Sybase</div>
            <div className="pourcentage-80">80%</div>
          </div>
        </div>

        {/*<div className="box-competence">
          <div className="box">
            <div id="competence-100">
              <div className="titre-competence">C#</div>
            </div>
          </div>
          
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">WPF</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-100">
              <div className="titre-competence">REST</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-100">
              <div className="titre-competence">WebAPI</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">MongoDB</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-100">
              <div className="titre-competence">Azure DevOps</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Datalake</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-60">
              <div className="titre-competence">Winforms</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">RabbitMQ</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Oracle</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">WCF</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Web Service</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">J2EE</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Java</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Spring</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Sybase</div>
            </div>
          </div>
        </div>
  */}
    </div>
      <div className="skills">
        <div className="titre-skills">Compétences fonctionnelles</div>
        <div className="box-competence">
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">VaR</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">PnL</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Risk Analysis</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-60">
              <div className="titre-competence">Assurance</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-60">
              <div className="titre-competence">Asset Management</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-60">
              <div className="titre-competence">Risque de crédit</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">ISR</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Option de change</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Pricing intéractif</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Deal Lifecycle</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-80">
              <div className="titre-competence">Produits exotiques</div>
            </div>
          </div>
          <div className="box">
            <div id="competence-60">
              <div className="titre-competence">Produits structurés</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="icon-retour">
      <a href="#home" ><CgArrowUpO /></a>
    </div>
  </div>
  )
}

export default Skills;