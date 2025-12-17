import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a passionate <b className="purple">Full-Stack Developer</b> who
              enjoys turning complex problems into elegant, scalable solutions.
              <br />
              <br />
              I specialize in building robust applications using
              <i>
                <b className="purple">
                  {" "}
                  .NET, C#, HTML, CSS, JavaScript, LINQ, jQuery, and MySQL
                </b>
              </i>.
              <br />
              <br />
              My primary interests include developing
              <i>
                <b className="purple"> modern web applications</b>
              </i>{" "}
              and enterprise-level systems that are performant, secure, and user-centric.
              <br />
              <br />
              Whenever possible, I love crafting solutions with
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript frameworks and clean UI/UX principles
                </b>
              </i>{" "}
              to deliver meaningful digital experiences.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let’s <span className="purple">connect</span> and build something amazing
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/codewithvaibhavv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/codewithvaibhav/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/wild_wood_wanderer_/?next=%2F"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
