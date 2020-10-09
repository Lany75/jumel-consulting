import React from "react";
//import logo from "./logo.svg";
import nasa from "./images/espace.jpg";
import "./App.css";
import Transition from "./components/transition/Transition";

console.log(nasa);

function App() {
  return (
    <div className="App">
      <div id="home">
        <div id="header">Header</div>
        Home
      </div>
      <div id="about">About</div>
      <Transition lien={nasa} />
      <div id="skills">Skills</div>
      <Transition lien={nasa} />
      <div id="portfolio">Portfolio</div>
      <Transition lien={nasa} />
      <div id="contact">Contact</div>
    </div>
  );
}

export default App;
