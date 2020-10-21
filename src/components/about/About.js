import React from "react";
import { CgArrowUpO } from "react-icons/cg";

import "./AboutDesktop.css";
import "./AboutMobile.css";

const About = () => {
  return (
    <div id="about">

      <div id="text-about">
        <div>
          <div className="image-about" id="image-consulting">CONSULTING</div>
          <div className="text-expertise">Chez Jumel, on fait du consulting, c'est trop bien</div>
        </div>
        <div>
          <div className="image-about" id="image-bfa">
            <div>BANQUE</div> 
            <div>FINANCE</div> 
            <div>ASSURANCE</div>
          </div>
          <div className="text-expertise">On a une super expérience en Banque, Finance et Assurance</div>
        </div>
        <div>
          <div className="image-about" id="image-cloud">CLOUD</div>
          <div className="text-expertise">Chez Jumel, on a la tête dans les nuages.</div>
        </div>
      </div>
      
      <div className="icon-retour">
        <a href="#home"><CgArrowUpO /></a>
      </div>
    </div>
  );
};

export default About;
