
import { React, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nacIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import jdlogo from "../assets/img/jd-logo.svg";



function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScorlled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScorlled(true)
      } else {
        setScorlled(false)
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }




  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
          <img src={jdlogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >projects</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jagadeeshgongidi/" target="_blank" rel="noopener noreferrer">  <img src={nacIcon1} alt='' /></a>
              <a href="https://www.facebook.com/Jagadeesh.gongidi/" target="_blank" rel="noopener noreferrer">  <img src={navIcon2} alt='' /></a>
              <a href="https://www.instagram.com/jagadeesh_gongidi/" target="_blank" rel="noopener noreferrer">  <img src={navIcon3} alt='' /></a>
            </div>
            <button className="vvd" onClick={() => console.log('vvd')} >lets connect </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;