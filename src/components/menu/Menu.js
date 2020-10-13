import React from "react";
import "./MenuDesktop.css";

const Menu = () => {
  return (
    <div id="menu">
      <div className="div-menu">
        <a href="#home">Accueil</a>
      </div>
      <div className="div-menu">
        <a href="#about">A propos</a>
      </div>
      <div className="div-menu">
        <a href="#skills">Compétences</a>
      </div>
      <div className="div-menu">
        <a href="#portfolio">Portfolio</a>
      </div>
      <div className="div-menu">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Menu;
