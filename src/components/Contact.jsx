import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <Container className="py-4">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold d-inline-block">
            Get In <span className="text-primary">Touch</span>
          </h2>
        </div>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center p-3 rounded-4 bg-light">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3"><i className="fas fa-phone text-primary fs-5"></i></div>
                <div><p className="mb-0 fw-semibold">Phone</p><a href="tel:+919080078849" className="text-decoration-none text-secondary">+91 9080078849</a></div>
              </div>
              <div className="d-flex align-items-center p-3 rounded-4 bg-light">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3"><i className="fas fa-envelope text-primary fs-5"></i></div>
                <div><p className="mb-0 fw-semibold">Email</p><a href="mailto:narasimman2067@gmail.com" className="text-decoration-none text-secondary">narasimman2067@gmail.com</a></div>
              </div>
              <div className="d-flex align-items-center p-3 rounded-4 bg-light">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3"><i className="fas fa-map-marker-alt text-primary fs-5"></i></div>
                <div><p className="mb-0 fw-semibold">Location</p><p className="mb-0 text-secondary">Coimbatore, Tamil Nadu, India</p></div>
              </div>
              <div className="d-flex gap-3 mt-2 justify-content-center justify-content-md-start">
                <a href="https://github.com/Narasimman-2067 " target="_blank" className="btn btn-outline-dark rounded-circle p-2" style={{width:'40px',height:'40px'}}><i className="fab fa-github"></i></a>
                <a  href="https://www.linkedin.com/in/narasimman-s-8777523b0" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-circle p-2" style={{width:'40px',height:'40px'}}><i className="fab fa-linkedin-in"></i></a>
                {/* <a href="#" className="btn btn-outline-info rounded-circle p-2" style={{width:'40px',height:'40px'}}><i className="fab fa-twitter"></i></a> */}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-primary bg-opacity-10 p-4 rounded-4 text-center">
              <h4 className="fw-bold">Let's work together</h4>
              <p className="text-secondary">I’m open to new opportunities & collaborations. Feel free to reach out.</p>
              <div className="bg-white p-3 rounded-3 d-inline-block mx-auto"><i className="fas fa-check-circle text-success me-1"></i> Response within 24 hours.</div>
              <div className="mt-3 text-secondary fw-light">Available for freelance / full-time roles</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
