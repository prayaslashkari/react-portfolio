import React from 'react';
import './App.css';

import {Demo,Footer, Hireme, Photogrid, Navbar,Hero,Skills, Project, Education} from './components';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Demo/>
      <Hero/>
      <Skills/>
      <Education/>
      <Project/>
      <Hireme/>
      <Footer/>

   {/* <Photogrid/>*/}
    </div> 
  );
}

export default App;
