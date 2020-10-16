import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { CgMenuRound } from 'react-icons/cg';

import Header from '../components/header/Header';
import Menu from '../components/menu/Menu';

describe ('composant <Header />', ()=> {
  const header = shallow(<Header />);

  it('Header component contains a div whitch id is "header"', ()=>{
    const divHeader = header.find("#header");
    expect(divHeader).to.have.length(1);
  })

  it('the div whitch id is "header" contains a div whitch id is "menu-mobile-phone-mail" and a Menu component', ()=>{
    const divHeader = header.find("#header");
    const divMenuMobilePhoneMail = divHeader.find("#menu-mobile-phone-mail");
    expect (divMenuMobilePhoneMail).to.have.length(1);
    expect(divHeader).to.contain(<Menu />)
  })

  it('The div whitch id is"menu-mobile-phone-mail" contains 2 div witch id are "menu-mobile" and "phone-mail"', ()=> {
    const divMenuMobilePhoneMail = header.find("#menu-mobile-phone-mail");
    const divMenuMobile = divMenuMobilePhoneMail.find('#menu-mobile');
    const divPhoneMail = divMenuMobilePhoneMail.find('#phone-mail');
    expect(divMenuMobile).to.have.length(1);
    expect(divPhoneMail).to.have.length(1);
  })

  it('The div whitch id is "menu-mobile" contains a CgMenuRound icon', ()=>{
    const divMenuMobile = header.find("#menu-mobile");
    expect(divMenuMobile).to.contain(<CgMenuRound />)
  })

  it('The div whitch id is "phone-mail" contains 2 div whitch id are "phone" and "mail"', ()=>{
    const divPhoneMail = header.find("#phone-mail");
    const divPhone = divPhoneMail.find("#phone");
    const divMail = divPhoneMail.find("#mail");
    expect(divPhone).to.have.length(1);
    expect(divMail).to.have.length(1);
  })

  it('The div whitch id is "phone" contains 2 div whitch classname are "icon" and "text"', ()=>{
    const divPhone = header.find("#phone");
    const divIcon = divPhone.find(".icon");
    const divText = divPhone.find(".text");
    expect(divIcon).to.have.length(1);
    expect(divText).to.have.length(1);
  })

  it('The div whitch id is "mail" contains 2 div whitch classname are "icon" and "text"', ()=>{
    const divMail = header.find("#phone");
    const divIcon = divMail.find(".icon");
    const divText = divMail.find(".text");
    expect(divIcon).to.have.length(1);
    expect(divText).to.have.length(1);
  })
})