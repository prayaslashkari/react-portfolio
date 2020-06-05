import React from 'react';
import './App.css';

import {Demo,Footer, Hireme, Photogrid, Navbar,Hero,Skills, Project, Education, Main} from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/> 
      <Hero/>
      <Skills/>
      <Education/>
      <Demo/>
      <Project/>
      <Hireme/>
      <Footer/>

   {/* <Photogrid/>*/}
    </div> 
  );
}

export default App;
