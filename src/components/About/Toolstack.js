import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di"; // Added for Git (Version Control)
import {
  SiVisualstudiocode,
  SiVercel,
  SiVisualstudio,
  SiMicrosoftsqlserver,
  SiGithub,
  SiWindows, // Fallback for IIS
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Visual Studio */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>

      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* SQL Server Management Studio (SSMS) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>

      {/* GitHub (Collaboration) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      {/* Git (Version Control) */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      {/* Internet Information Services (IIS) - Represented by Windows */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>

      {/* Vercel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>  
  );
}

export default Toolstack;