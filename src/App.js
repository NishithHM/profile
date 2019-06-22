import React from 'react';
import './App.css';
import { Banner, AboutMe, Skills, Graph,Services,Resume,Contact } from './Components';

function App() {
  return (
    <div className="App">
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Graph/>
      <Services/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
