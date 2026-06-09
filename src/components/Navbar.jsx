import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BSNavbar bg="white" expand="lg" className="shadow-sm sticky-top border-bottom">
      <Container>
        <BSNavbar.Brand href="#home" className="fw-bold fs-3">
          <span style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>NARASIMMAN.S</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;