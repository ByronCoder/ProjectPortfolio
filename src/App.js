import React from 'react';
import {Nav, Navbar, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import logo from './mypic.jpeg';
import ProjectsTable from "./components/ProjectsTable"

function App() {
  return (
    <div className="App">
     
        
          <Navbar className="navbar" fixed="top">
          <FontAwesomeIcon icon={faCode} size="2x" color="white"/>
          <Navbar.Brand className="nav-brand" href="#home">Byron Blank's Portfolio</Navbar.Brand>
            <Nav className="navbar-nav mx-auto">
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar>

          <header className="jumbotron text-black text-center">
            <h1>Byron Blank's Portfolio</h1>
            <Image src={logo} alt="" className="portfolio-img rounded-circle" />
            <p class="jumbotron-subheading font-weight-light mb-0">Web Developer</p>
          </header>
          <section className="page-section" id="about">
            <h2>About</h2>
            <p>Hello, my name is Byron Blank and I am a web developer. You can find the projects in my portfolio below along with links to a demo and the source on GitHub.</p>
          </section>
         
          <section className="page-section" id="portfolio">
            <h2>Portfolio</h2>
            <div className="portDiv">
              <ProjectsTable />
            </div>
              
          </section>
      </div>
  
  );
}

export default App;
