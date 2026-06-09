import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Profile = () => {
  return (
    <section id="home" className="py-5" style={{ backgroundColor: '#eef2ff' }}>
      <Container className="py-5">
        <Row className="align-items-center g-5">
          <Col lg={7} className="text-center text-lg-start">
            <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-3 fw-semibold">
              <i className="fas fa-coffee me-1"></i> Java | Spring Boot | Full-Stack
            </span>
            <h1 className="display-4 fw-bold text-dark">
              Hi, I'm <span className="text-primary">Narasimman S</span>
            </h1>
            <p className="lead text-secondary mt-3">
              Full-Stack Java Developer with Around 3 years of experience building scalable backend services and modern web applications.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start">
              <Button href="#contact" variant="primary" className="rounded-end px-4 py-2">
                <i className="fas fa-paper-plane me-2"></i> Hire Me
              </Button>
              <Button href="#projects" variant="outline-primary" className="rounded-end px-4 py-2">
                <i className="fas fa-code-branch me-2"></i> View Projects
              </Button>
              <Button href="/Narasimman_cv.pdf" variant="btn btn-outline-primary" className="rounded-end px-4 py-2">
                <i className="fas fa-download me-2"></i> Download Resume
              </Button>
            </div>
          </Col>
          <Col lg={5} className="text-center">
            <div
              className="bg-white rounded-circle shadow-lg mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: '200px',
                height: '200px',
                background: 'linear-gradient(145deg, #2563eb, #1e40af)',
              }}
            >
              <span className="display-3 fw-bold text-white">NS</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Profile;