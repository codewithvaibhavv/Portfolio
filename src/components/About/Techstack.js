import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiJava,
  DiDatabase, // Best for LINQ
} from "react-icons/di";
import {
  SiDotnet,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiMysql,
  SiBootstrap,      // Added Bootstrap
  SiMicrosoftazure, // Often used for Entity Framework/Azure Data
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C# and .NET */}
      <Col xs={4} md={2} className="tech-icons"><SiDotnet /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCsharp /></Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons"><SiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJquery /></Col>

      {/* Data & Query */}
      <Col xs={4} md={2} className="tech-icons"><DiDatabase /></Col>{/* LINQ */}
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftazure /></Col>{/* Entity Framework */}
      
      {/* Java */}
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
    </Row>
  );
}

export default Techstack;