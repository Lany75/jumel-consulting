import React from "react";
import { CgArrowUpO } from "react-icons/cg";
import "./AboutDesktop.css";
import "./AboutMobile.css";

const About = () => {
  return (
    <div id="about">
      <div id="titre-about">A Propos</div>
      <div id="text-about"> lorem ipsum</div>
      <div>
        <a href="#home" className="icon-retour">
          <CgArrowUpO />
        </a>
      </div>
    </div>
  );
};

export default About;
