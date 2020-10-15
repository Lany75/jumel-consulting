import React from 'react';
import { CgArrowUpO } from 'react-icons/cg';
import './PortfolioDesktop.css';

const Portfolio = () => {
  return(
  <div id="portfolio">
   <div id="text-about">Portfolio</div>
    <div>
      <a href="#home" className="icon-retour">
        <CgArrowUpO />
      </a>
    </div>
  </div>
  )
}

export default Portfolio;