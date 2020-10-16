import React from 'react';
import { CgArrowUpO } from 'react-icons/cg';
import './PortfolioDesktop.css';
import './PortfolioMobile.css';

const Portfolio = () => {
  return(
  <div id="portfolio">
   <div id="titre-portfolio">Portfolio</div>
   <div id="text-portfolio"> lorem ipsum</div>
    <div>
      <a href="#home" className="icon-retour">
        <CgArrowUpO />
      </a>
    </div>
  </div>
  )
}

export default Portfolio;