import React, { useRef } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
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
      <div className='black-nav' style={{position : 'fixed'}}>
        <button onClick={() => scrollToRef(aboutRef)}>About Me</button>
        <a onClick={() => scrollToRef(skillRef)}>Skills</a>
        <a onClick={() => scrollToRef(projectRef)}>Project</a>
        <a onClick={() => scrollToRef(careerRef)}>Career</a>
      {/* <Container>
                <Navbar.Brand href='/'>JJONG's Blog</Navbar.Brand>
                <Nav style={{float : 'right', '--bs-nav-link-color': 'unset'}}>
                    <Nav.Link >About Me</Nav.Link>
                    <Nav.Link ></Nav.Link>
                    <Nav.Link ></Nav.Link>
                    <Nav.Link ></Nav.Link>
                </Nav>
            </Container> */}
      </div>
      {/* <Navbar style={{}}>
            
        </Navbar> */}

      <div className='Second-Div' ref={aboutRef}>
        <h1>about Page</h1>
      </div>
      <div className='Second-Div' ref={skillRef}>
        <h1>skill Page</h1>
      </div>
      <div className='Second-Div' ref={projectRef}>
        <h1>project Page</h1>
      </div>
      <div className='Second-Div' ref={careerRef}>
        <h1>career Page</h1>
      </div>
    </div>
  );
}

export default App;
  