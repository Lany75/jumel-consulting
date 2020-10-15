import React from "react";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home-transition">
        <Home />
        <div id="transition-1" className='transition'></div>
      </div>
      <About />
      <div id="transition-2" className='transition'></div>
      <Skills />
      <div id="transition-3" className='transition'></div>
      <div id="portfolio">Portfolio</div>
      <div id="transition-4" className='transition'></div>
      <div id="contact">Contact</div>
      <div id='footer'>Pied de page</div>
    </div>
  );
}

export default App;
