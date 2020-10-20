import React from "react";
import { CgArrowUpO } from "react-icons/cg";
import consulting from "../../images/consulting.jpg";
import bfa from "../../images/BFA.jpg";
import cloud from "../../images/cloud.jpg";
import "./AboutDesktop.css";
import "./AboutMobile.css";

const About = () => {
  return (
    <div id="about">
      <div id="titre-about">Expertise</div>
      <div id="text-about">
        <div>
          <img  className="image-about" src={consulting} alt="consulting" />
          <div>lorem ipsum</div>
        </div>
        <div>
          <img  className="image-about" src={bfa} alt="banque-finance-assurance" />
        <div>lorem ipsum</div>
        </div>
        <div>
          <img  className="image-about" src={cloud} alt="cloud" />
        <div>lorem ipsum</div>
        </div>
      </div>
      
      <div className="icon-retour">
        <a href="#home"><CgArrowUpO /></a>
      </div>
    </div>
  );
};

export default About;
