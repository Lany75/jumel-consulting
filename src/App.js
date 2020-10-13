import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <div id="about">About</div>
      <div id="transition-1"></div>
      <div id="skills">Skills</div>
      <div id="transition-2"></div>
      <div id="portfolio">Portfolio</div>
      <div id="transition-3"></div>
      <div id="contact">Contact</div>
    </div>
  );
}

export default App;
