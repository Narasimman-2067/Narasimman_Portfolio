import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Skills = () => {
  const techList = ["Java 8+", "Spring Boot", "REST API", "Spring Data JPA", "MS SQL", "Git/GitHub", "React (Basic)", "JSP", "Postman", "Agile / Scrum", "MVC Pattern", "Eclipse"];
  const softSkills = ["Collaborative", "Adaptable", "Critical Thinking", "Time Management"];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container className="py-4">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold d-inline-block">
            Technical <span className="text-primary">Expertise</span>
          </h2>
        </div>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-3">
              <Card.Body>
                <h5 className="fw-bold"><i className="fas fa-code text-primary me-2"></i> Languages & Core</h5>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {techList.slice(0,6).map(t => <span key={t} className="skill-badge">{t}</span>)}
                </div>
                <h5 className="fw-bold mt-4"><i className="fas fa-microchip text-primary me-2"></i> Frameworks & Tools</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {techList.slice(6).map(t => <span key={t} className="skill-badge">{t}</span>)}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-3">
              <Card.Body>
                <h5 className="fw-bold"><i className="fas fa-users text-primary me-2"></i> Soft Skills</h5>
                {softSkills.map(s => <div key={s} className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> {s}</div>)}
                <h5 className="fw-bold mt-3">Version Control & CI</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <span className="skill-badge">Git/GitHub</span>
                  <span className="skill-badge">CVS</span>
                  <span className="skill-badge">SonarQube</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-3">
              <Card.Body>
                <h5 className="fw-bold"><i className="fas fa-database text-primary me-2"></i> Databases & Tools</h5>
                <div><i className="fas fa-check text-primary me-2"></i> MS SQL Server, MySQL</div>
                <div><i className="fas fa-check text-primary me-2"></i> Query Optimization & Schema Design</div>
                <div><i className="fas fa-check text-primary me-2"></i> Postman API Testing</div>
                <div><i className="fas fa-check text-primary me-2"></i> Agile Methodologies</div>
                <div className="alert alert-primary mt-3 mb-0 py-2">🚀 Currently enhancing: React + Spring Boot full-stack migration</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
