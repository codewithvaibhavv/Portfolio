import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings! I am <span className="purple">Vaibhav Sharma</span>, 
            a passionate developer from <span className="purple">Moradabad, Uttar Pradesh.</span>
            <br />
            <br />
            Currently, I serve as a <span className="purple">Software Developer</span> at <span className="purple">T.M.U.</span>, 
            where I contribute to the evolution of a comprehensive <span className="purple">Enterprise Resource Planning (ERP)</span> system. 
            My daily work involves architecting and integrating core modules for <span className="purple">ERP</span>.
            <br />
            <br />
            I specialize in building robust backend logic using <span className="purple">C#, LINQ, and Entity Framework</span>, 
            while crafting seamless user experiences with <span className="purple">HTML, CSS, JavaScript, and Bootstrap</span>. 
            My goal is to streamline business processes through real-time reporting and efficient data management.
            <br />
            <br />
            I hold a <span className="purple">Master’s degree</span> from <span className="purple">AKTU</span>, where I laid the 
            foundation for my career in software engineering.
            <br />
            <br />
            When I'm not in front of a debugger, I enjoy:
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Landscapes
            </li>
            <li className="about-activity">
              <ImPointRight /> Soulful Melodies
            </li>
            <li className="about-activity">
              <ImPointRight /> Strategic Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic", marginTop: "20px" }}>
            "Designing logic that simplifies lives and scales businesses."{" "}
          </p>
          <footer className="blockquote-footer">Vaibhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;