import React from 'react';
import { CgArrowUpO } from 'react-icons/cg';
import './SkillsDesktop.css';
import './SkillsMobile.css';

const Skills = () => {
  return (
  <div id="skills">
    <div id="titre-skills">Compétences</div>
    <div id="text-skills"> lorem ipsum</div>
    <div>
      <a href="#home" className="icon-retour">
        <CgArrowUpO />
      </a>
    </div>
  </div>
  )
}

export default Skills;