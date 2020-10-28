import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Portfolio from '../components/portfolio/Portfolio';
import IconRetour from '../components/iconRetour/IconRetour';
import Experience from '../components/experience/Experience';
import logoEngie from "../images/Logo-Engie.jpg";

describe('composant <Portfolio />', ()=>{
  const portfolio = shallow(<Portfolio />);

  it('Portfolio component contains a div whitch id is "portfolio"', ()=>{
    const divPortfolio = portfolio.find("#portfolio");
    expect(divPortfolio).to.have.length(1);
  })

  it('The div whitch id is "portfolio" contains a div whitch id is "text-portfolio" and an IconRetour component', ()=>{
    const divPortfolio = portfolio.find("#portfolio");
    const divTextPortfolio = divPortfolio.find("#text-portfolio");
    expect(divTextPortfolio).to.have.length(1);
    expect(divPortfolio).to.contain(<IconRetour />);
  })

  it('The div whitch id is "text-portfolio" contains 2 div whitch className is "experiences"', ()=>{
    const divTextPortfolio = portfolio.find("#text-portfolio");
    const divsExperiences = divTextPortfolio.find(".experiences");
    expect(divsExperiences).to.have.length(2);
  })

  it('The div whitch className is "experiences" contains 1 to 3 divs whitch className is "experience"', ()=>{
    const divsExperiences = portfolio.find(".experiences");
    divsExperiences.map(de=>{
      const divExperience = de.find(".experience");
      expect(divExperience.length).to.be.greaterThan(0);
      expect(divExperience.length).to.be.lessThan(4);
      return(true);
    })
  })

  /*it('The divs whitch className are "experience" contain an Experience component', ()=>{
    const divsExperience = portfolio.find(".experience");
    divsExperience.map(de=>{
      console.log(de.props());
      expect(de).to.contain(
      <Experience 
        idExperience="experience-1" 
        logoEntreprise={logoEngie} 
        altImage="Engie" 
        nomEntreprise="ENGIE Global Markets" 
        titrePoste="Technical Lead"
      />);
      return true
    })
  })*/
})