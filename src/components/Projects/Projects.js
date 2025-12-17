import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crosfit from "../../Assets/Projects/gym.jpg";
import onlineexam from "../../Assets/Projects/OnlineExam.jpg";
import erp from "../../Assets/Projects/ERP.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Showcasing my expertise in <span className="purple">Full-Stack Development</span> and <span className="purple">Enterprise Solutions</span>.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erp}
              isBlog={false}
              title="Enterprise Resource Solution"
              description="A high-performance ERP system engineered for T.M.U. to digitize complex university operations. Developed modular solutions for Admissions, Accounts, and Research using C# and .NET. I integrated LINQ and Entity Framework for sophisticated data analytics and automated administrative workflows through a responsive Bootstrap dashboard, ensuring real-time reporting and data integrity across all departments."
              ghLink="https://github.com/codewithvaibhavv"
              demoLink="https://github.com/codewithvaibhavv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crosfit}
              isBlog={false}
              title="CrossFit"
              description="A sleek, modern fitness application focused on superior UI/UX and mobile responsiveness. It features a custom-built BMI Calculator and interactive health tracking tools to engage users. Built with HTML5, CSS3, and JavaScript, the platform emphasizes clean semantic code and performance optimization, providing fitness enthusiasts with a personalized digital hub to track their health metrics effectively."
              ghLink="https://github.com/codewithvaibhavv"
              demoLink="https://github.com/codewithvaibhavv"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineexam}
              isBlog={false}
              title="Online Examination System"
              description="A secure digital assessment portal featuring multi-level authentication and real-time exam monitoring. I built an automated evaluation engine that handles question randomization and instant result generation. Designed to scale institutional testing, the system ensures high concurrency and data security while providing a seamless user experience for both students and university administrators."
              ghLink="https://github.com/codewithvaibhavv"
              demoLink="https://github.com/codewithvaibhavv"               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;