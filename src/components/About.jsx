import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <Container className="py-4">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold d-inline-block">
            About <span className="text-primary">Me</span>
          </h2>
        </div>
        <Row className="g-5">
          <Col md={6}>
            <h3 className="fw-semibold">Java Developer with Passion</h3>
            <p className="text-secondary">
              Seeking a challenging position as a Java Developer where I can apply my skills in Java and Spring Framework to develop efficient, scalable, and high-quality software solutions.
            </p>
            <p className="text-secondary">
              With around 3 years of experience in building robust backend services, RESTful APIs, and full-stack web apps. I thrive in collaborative environments.
            </p>
            <Row className="mt-4 g-3">
              <Col xs={6}><i className="fas fa-calendar-alt text-primary me-2"></i> DOB: 20 June 1997</Col>
              <Col xs={6}><i className="fas fa-globe text-primary me-2"></i> Indian</Col>
              <Col xs={6}><i className="fas fa-language text-primary me-2"></i> Tamil, English</Col>
              <Col xs={6}><i className="fas fa-map-marker-alt text-primary me-2"></i> Coimbatore, TN</Col>
            </Row>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm rounded-4 p-4 bg-light">
              <h4 className="fw-bold"><i className="fas fa-user-graduate text-primary me-2"></i> Education</h4>
              <div className="mt-3 border-start border-4 border-primary ps-3">
                <p className="fw-bold mb-0">PPG Institute of Technology</p>
                <p className="text-secondary">B.E - Mechanical Engineering, 2019</p>
              </div>
              <div className="mt-3 border-start border-4 border-primary ps-3">
                <p className="fw-bold mb-0">BVM Matric Higher Secondary School</p>
                <p className="text-secondary">HSC, 2015</p>
              </div>
              <h4 className="fw-bold mt-4"><i className="fas fa-heart text-primary me-2"></i> Core Values</h4>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {['Dedicated', 'Proactive Team Player', 'Problem Solver', 'Good Listener'].map(v => (
                  <span key={v} className="badge bg-light text-dark p-2">{v}</span>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;