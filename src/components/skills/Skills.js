import React from 'react';
import { CgArrowUpO } from 'react-icons/cg';
import './Skills.css'

const Skills = () => {
  return (
  <div id="skills">
    <div id="text-about">Compétences</div>
    <div>
      <a href="#home" className="icon-retour">
        <CgArrowUpO />
      </a>
    </div>
  </div>
  )
}

export default Skills;