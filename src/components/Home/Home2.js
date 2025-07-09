import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
      I'm currently pursuing a <strong>B.Tech in Information Technology</strong> at{" "}
      <strong>Vidyavardhini’s College of Engineering and Technology (VCET)</strong>, Mumbai.
      <br />
      <br />
      My journey into programming began with curiosity, and over time, I've developed a strong interest in building scalable and user-friendly web applications.
      <br />
      <br />
      I am proficient in languages such as
      <i>
        <b className="purple"> C++, JavaScript, and Python</b>
      </i>
      , and I enjoy exploring full-stack development.
      <br />
      <br />
      My core interests lie in developing modern &nbsp;
      <i>
        <b className="purple">Web Technologies and Products</b>
      </i>
      , with hands-on experience in both frontend and backend frameworks.
      <br />
      <br />
      I love creating impactful solutions using <b className="purple">Node.js</b> and modern JavaScript frameworks like{" "}
      <i>
        <b className="purple">React.js</b> and <b className="purple">Next.js</b>
      </i>
      , along with styling tools such as <b className="purple">Tailwind CSS</b>.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SahilS1903"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sahil-shah-8780a8312/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s_._s_.3831"
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
