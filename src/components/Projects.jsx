import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: "CHCP – Healthcare Management System",
      role: "Full Stack Developer",
      period: "May 2024 - Present",
      desc: "A comprehensive healthcare management system designed to automate and streamline the end-to-end medical claims process, including user/patient records, claims processing, billing, rate management, and report generation.",
      tech: ["JSP", "JavaScript", "Spring Core", "MS SQL Server", "CVS", "Eclipse", "Postman", "SonarQube"],
      highlights: [
        "Developed and maintained application modules using JSP, JavaScript, and Spring Core for both frontend and backend functionality.",
        "Resolved bugs and implemented enhancements based on feedback from manual and automation testing teams.",
        "Integrated and optimized MS SQL Server database queries to improve data handling and performance.",
        "Ensured code quality and compliance using SonarQube and maintained version control through CVS.",
        "Collaborated in daily stand-ups and sprint meetings for task tracking and agile development.",
        "Utilized Eclipse for debugging, Postman for API testing, and currently learning React for future migration to a Spring Boot + React stack."
      ]
    },
    {
      title: "CHERP System – Healthcare Management Application",
      role: "Backend Developer",
      period: "Apr 2024 - Present",
      desc: "A healthcare management application designed to streamline patient information, medical record management, and report generation, helping providers efficiently manage clinical data and ensure compliance.",
      tech: ["Java 8", "JSP", "REST API", "Spring", "Spring Data JPA", "MS SQL", "SSMS", "CVS"],
      highlights: [
        "Supported and maintained the live application by identifying and resolving backend bugs to ensure smooth system performance.",
        "Implemented minor feature enhancements and UI modifications based on client feedback and business needs.",
        "Developed and integrated new modules to support additional vendor and patient record management requirements.",
        "Collaborated with cross-functional teams (frontend, QA, and support) to troubleshoot issues and deliver timely solutions.",
        "Ensured data accuracy, consistency, and compliance with healthcare standards in backend processes."
      ]
    },
    {
      title: "Ecommerce Client-Side Application",
      role: "Backend Developer",
      period: "2023 - Jan 2024",
      desc: "User-friendly portal for sales representatives and distributors with secure authentication, real-time dashboards for order and customer management.",
      tech: ["Java 8", "JSP", "REST API", "Spring Boot", "Spring Data JPA", "MySQL", "Git", "GitHub"],
      highlights: [
        "Developed code according to business requirements of the client and reported to onsite team on sprint meetings.",
        "Implemented secure authentication and real-time dashboards for order and customer management.",
        "Handled debugging and software components using Java and related technologies.",
        "Sent developed code for testing and collaborated with QA teams."
      ]
    }
  ];

  // State to track expanded status for each project (by index)
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <Container className="py-4">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold d-inline-block">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-secondary mt-3">Real-world applications delivering impact in healthcare & e-commerce domains.</p>
        </div>
        <Row className="g-4">
          {projects.map((p, idx) => {
            const isExpanded = expanded[idx];
            const visibleHighlights = isExpanded ? p.highlights : p.highlights.slice(0, 2);
            const hasMore = p.highlights.length > 2;

            return (
              <Col md={6} lg={4} key={idx}>
                <Card className="h-100 border-0 shadow-sm rounded-4 shadow-hover">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start">
                      <h5 className="fw-bold">{p.title}</h5>
                      <span className="badge bg-primary rounded-pill">{p.role}</span>
                    </div>
                    <p className="text-secondary small mt-2">
                      <i className="far fa-clock me-1"></i> {p.period}
                    </p>
                    <p className="card-text text-secondary">{p.desc}</p>
                    <div className="d-flex flex-wrap gap-1 mt-3">
                      {p.tech.slice(0, 4).map(t => (
                        <span key={t} className="badge bg-light text-dark border">{t}</span>
                      ))}
                      {p.tech.length > 4 && (
                        <span className="badge bg-light text-dark">+{p.tech.length - 4}</span>
                      )}
                    </div>
                    <div className="mt-3 pt-2 border-top">
                      <small className="fw-semibold">Key contributions:</small>
                      <ul className="text-secondary small mt-1 ps-3">
                        {visibleHighlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                      {hasMore && (
                        <Button
                          variant="link"
                          size="sm"
                          className="ps-0 text-primary text-decoration-none"
                          onClick={() => toggleExpand(idx)}
                        >
                          <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} me-1`}></i>
                          {isExpanded ? 'Show less' : `Show all (${p.highlights.length - 2} more)`}
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;