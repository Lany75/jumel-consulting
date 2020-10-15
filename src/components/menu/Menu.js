import React from "react";
import "./MenuDesktop.css";
import "./MenuMobile.css";

const Menu = () => {
  return (
    <div id="menu-desktop">
      <a href="#home" className="div-menu">
        Accueil
      </a>
      <a href="#transition-1" className="div-menu">
        A propos
      </a>
      <a href="#transition-2" className="div-menu">
        Compétences
      </a>
      <a href="#transition-3" className="div-menu">
        Portfolio
      </a>
      <a href="#transition-4" className="div-menu">
        Contact
      </a>
    </div>
  );
};

export default Menu;
