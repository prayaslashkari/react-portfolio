import React from 'react';
import './App.css';

import {Hireme,Photogrid, Navbar,Hero,Skills, Project, Education} from './components';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Hero/>
      <Skills/>
      {/* <Education/> */}
      <Project/>
      <Hireme/>

   {/* <Photogrid/>*/}
    </div> 
  );
}

export default App;
