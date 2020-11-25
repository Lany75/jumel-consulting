import React from "react";
import {useTranslation} from "react-i18next";
import "./MenuDesktop.css";
import "./MenuMobile.css";
import "./MenuTablet.css";

const Menu = () => {
  const [t] = useTranslation('translate');
  return (
    <div id="menu-desktop">
      <a href="#home" className="div-menu">
        {t('menu.accueil', {framework:'React'})}
      </a>
      <a href="#transition-1" className="div-menu">
      {t('menu.expertise', {framework:'React'})}
      </a>
      <a href="#transition-2" className="div-menu">
      {t('menu.competence', {framework:'React'})}
      </a>
      <a href="#transition-3" className="div-menu">
      {t('menu.experiences', {framework:'React'})}
      </a>
      <a href="#transition-4" className="div-menu">
      {t('menu.contact', {framework:'React'})}
      </a>
    </div>
  );
};

export default Menu;
