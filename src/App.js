import React from 'react';
import './App.css';

import {Carousel,Progresslist,LiveProject,Project2, Demo,Footer, Hireme, Photogrid, Navbar,Hero,Skills, Project, Education, Main} from './components';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Main/> 
    <Hero/>
    <Skills/>
    { /* <Education/> */}
    {/* <Demo/> */}
    {/* <Project/> */}
    <Progresslist/>
    {/* <LiveProject/> */}
    
    <Carousel/>
    <Hireme/>
    <Footer/>

   {/* <Photogrid/>*/}
    </div> 
  );
}

export default App;
