import React from "react";
import { CgArrowUpO } from "react-icons/cg";
import "./AboutDesktop.css";

const About = () => {
  return (
    <div id="about">
      <div id="text-about">A Propos</div>
      <div>
        <a href="#home" className="icon-retour">
          <CgArrowUpO />
        </a>
      </div>
    </div>
  );
};

export default About;
