import React from "react";
import { useTranslation } from "react-i18next";

import "./HomeDesktop.css";
import "./HomeMobile.css";
import "./HomeTablet.css";

const Home = () => {
  const [t] = useTranslation('translate');
  return (
    <div id="home">
      <div id="nom-entreprise">{t('home', {framework:'React'})}</div>
    </div>
  );
};

export default Home;
