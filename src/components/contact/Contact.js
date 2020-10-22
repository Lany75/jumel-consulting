import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import IconRetour from '../iconRetour/IconRetour';
import './ContactDesktop.css';
import './ContactMobile.css';

const Contact = () => {
  const [nomContact, setNomContact] = useState("");
  const [mailContact, setMailContact] = useState("");
  const [sujetContact, setSujetContact] = useState("");
  const [messageContact, setMessageContact] = useState("");

  const SetContactName = ()=>{
    const nom = document.getElementById("nom-contact").value;
    console.log(nom);
    setNomContact(nom);
  }

  const SetContactMail = ()=>{
    const mail = document.getElementById("mail-contact").value;
    console.log(mail);
    setMailContact(mail);
  }

  const SetContactSubject = ()=>{
    const sujet = document.getElementById("sujet-contact").value;
    console.log(sujet);
    setSujetContact(sujet);
  }

  const SetContactMessage = ()=>{
    const message = document.getElementById("message-contact").value;
    console.log(message);
    setMessageContact(message);
  }

  return (
  <div id="contact">
    <div id="titre-contact">Contact</div>
    <div id="text-contact">
    <form id="formulaire-contact">
      <div id="nom-mail-contact">
        <div className="nom-contact"><TextField id="nom-contact" className="nom-contact" label="Nom" variant="outlined" defaultValue={nomContact} onChange={SetContactName} /></div>
        <div className="mail-contact"><TextField id="mail-contact" className="mail-contact" label="Mail" variant="outlined" defaultValue={mailContact} onChange={SetContactMail} /></div>
      </div>
      <div className="sujet-contact"><TextField id="sujet-contact" className="sujet-contact" label="Sujet" variant="outlined" defaultValue={sujetContact} onChange={SetContactSubject} /></div>
      <div className="message-contact">
        <TextField
          id="message-contact"
          className="message-contact"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          defaultValue={messageContact} 
          onChange={SetContactMessage}
        />
      </div>
      <Button variant="contained" disableElevation>Envoyer</Button>
    </form>
    </div>
    <IconRetour />
  </div>
  )
}

export default Contact;