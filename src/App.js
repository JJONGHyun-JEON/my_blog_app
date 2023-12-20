import React, { useRef } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import About from './container/About';
import Career from './container/Career';
import Skill from './container/Skill';
import Project from './container/Project';
import './global.css';

function App() {
  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const careerRef = useRef();


  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  

  return (
    <div className='App'>

      <div className='black-nav' >
        <a style={{textDecorationLine : 'none', marginRight : '700px', color : 'black', fontWeight : 'bold', fontSize : '20px'}} href='/'>JJONG's Blog</a>
        <button style={{marginRight : '13px'}} onClick={() => scrollToRef(aboutRef)}>About Me</button>
        <button style={{marginRight : '13px'}} onClick={() => scrollToRef(skillRef)}>Skills</button>
        <button style={{marginRight : '13px'}} onClick={() => scrollToRef(careerRef)}>Career</button>
        <button style={{marginRight : '13px'}} onClick={() => scrollToRef(projectRef)}>Project</button>
      </div>
      
      <div style={{paddingTop : '9vh'}} className='Second-Div' ref={aboutRef}>
        <About/>
      </div>
      <div style={{paddingTop : '9vh'}} className='Second-Div' ref={skillRef}>
      <Skill/>
      </div>
      <div style={{paddingTop : '9vh'}} className='Second-Div' ref={projectRef}>
      <Project/>
      </div>
      <div style={{paddingTop : '9vh'}} className='Second-Div' ref={careerRef}>
      <Career/>
      </div>
    </div>
  );
}

export default App;
  