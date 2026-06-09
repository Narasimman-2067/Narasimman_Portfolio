import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white-50 py-4 text-center">
      <Container>
        <p className="mb-0">© 2026 Narasimman S. Built with React & Bootstrap 5. All rights reserved.</p>
        <small className="d-block mt-2">Java Full-Stack Portfolio | 3+ Years Experience</small>
      </Container>
    </footer>
  );
};

export default Footer;