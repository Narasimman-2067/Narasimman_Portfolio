import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer (Full Stack)",
      period: "April 2024 - Present",
      company: "PANINI INFOTECH PVT LTD (Coimbatore)",
      duties: [
        "Develop full-stack healthcare modules using JSP, JavaScript, Spring Core, integrated MS SQL Server.",
        "Resolved bugs & enhancements, SonarQube, CVS version control.",
        "Agile sprints, Postman API testing, Spring Boot + React Projects.",
        "Optimized database queries ."
      ]
    },
    {
      title: "Programmer Analyst (Backend)",
      period: "Jan 2023 - Jan 2024",
      company: "SPIRE SYSTEMS (Chennai)",
      duties: [
        "Developed e-commerce client app using Java 8, Spring Boot, JPA, REST APIs.",
        "Business requirement gathering, coding, MySQL integration.",
        "Sprint meetings and team coordination.",
        "Version control via Git/GitHub."
      ]
    }
  ];

  return (
    <section id="experience" className="py-5 bg-white">
      <Container className="py-4">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold d-inline-block">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>
        <Row className="justify-content-center">
          <Col lg={10}>
            {experiences.map((exp, idx) => (
              <Card key={idx} className="mb-4 border-0 shadow-sm rounded-4">
                <Card.Body className="p-4">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <h3 className="fw-bold">{exp.title}</h3>
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                      <i className="far fa-calendar-alt me-1"></i> {exp.period}
                    </span>
                  </div>
                  <p className="text-secondary mb-3"><i className="fas fa-building me-2"></i> {exp.company}</p>
                  <ul className="text-secondary">
                    {exp.duties.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </Card.Body>
              </Card>
            ))}
            <div className="alert alert-info text-center">
              <i className="fas fa-briefcase text-primary me-2"></i> <strong>3+ years</strong> of overall software development experience.
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;