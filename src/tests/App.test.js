import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from '../App';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';

describe('composant <App />', ()=> {
  const app = shallow(<App />);

  it('App contains a Header component', ()=> {
    expect(app).to.contain(<Header />);
  })

  it('App contains a Home component', ()=> {
    expect(app).to.contain(<Home />);
  })

  it('App contains a About component', ()=> {
    expect(app).to.contain(<About />);
  })

  it.skip('App contains a Skills component', ()=> {
    //expect(app).to.contain(<Skills />);
  })

  it.skip('App contains a Portfolio component', ()=> {
    //expect(app).to.contain(<Portfolio />);
  })

  it.skip('App contains a Contact component', ()=> {
    //expect(app).to.contain(<Contact />);
  })

  it.skip('App contains a Footer component', ()=>{
    //expect(app).to.contain(<Footer />);
  })

  it('App contains 4 Transition blocks', ()=>{
    expect(app.find('.transition')).to.have.length(4)
  })
})