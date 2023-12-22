import React, { useRef } from 'react';
import About from './container/About';
import Skill from './container/Skill';
import './global.css';

function App() {
  const aboutRef = useRef();
  const skillRef = useRef();


  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  

  return (
    <div className='App'>

      <div className='black-nav' >
        {/* <a style={{textDecorationLine : 'none', marginRight : '700px', color : 'black', fontWeight : 'bold', fontSize : '20px'}} href='/'>JJONG's Blog</a> */}
        <button style={{marginRight : '13px'}} onClick={() => scrollToRef(aboutRef)}>About Me</button>
        <button style={{marginRight : '13px'}} onClick={() => scrollToRef(skillRef)}>Skills</button>
        <button style={{marginRight : '13px'}} onClick={() => scrollToRef(skillRef)}>Career</button>
        <button style={{marginRight : '13px'}} onClick={() => scrollToRef(skillRef)}>Project</button>
        <button style={{marginRight : '13px'}} onClick={() => scrollToRef(skillRef)}>Education</button>
      </div>
      
      <div style={{paddingTop : '9vh'}}  ref={aboutRef}>
        <About/>
      </div>
      <div style={{paddingTop : '9vh'}}  ref={skillRef}>
      <Skill/>
      </div>
      {/* <div style={{paddingTop : '9vh'}} className='Second-Div' ref={careerRef}>
      <Project/>
      </div>
      <div style={{paddingTop : '9vh'}} className='Second-Div' ref={careerRef}>
      <Career/>
      </div> */}
    </div>
  );
}

export default App;
  