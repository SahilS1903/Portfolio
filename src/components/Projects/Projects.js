import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitFusion from "../../Assets/Projects/FitFusion.png"
import resumeBuilder from "../../Assets/Projects/ResumeBuilder.png"
import streamify from "../../Assets/Projects/Streamify.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitFusion}
              isBlog={false}
              title="Fitness Tracker"
              description="A comprehensive fitness tracking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include workout logging, progress tracking, goal setting, calorie counting, exercise library, and detailed analytics. Users can monitor their fitness journey with interactive charts and personalized recommendations."
              ghLink="https://github.com/SahilS1903/fitness-tracker-"
              demoLink="https://fitfusion-ashy.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeBuilder}
              isBlog={false}
              title="Resume Builder"
              description="A dynamic resume builder application developed using React.js. Users can create professional resumes with customizable templates, real-time preview, drag-and-drop functionality, and PDF export capabilities. Features include multiple design themes, section management, and responsive design for all devices."
              ghLink="https://github.com/SahilS1903/react-Resume-Builder"
              demoLink="https://react-resume-builder-brown.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamify}
              isBlog={false}
              title="Chat & Video Calling App"
              description="A full-featured communication platform built with the MERN stack. Includes real-time messaging, video calling, voice calls, file sharing, group chats, and user authentication. Utilizes WebRTC for video calls, Socket.io for real-time communication, and JWT for secure authentication."
              ghLink="https://github.com/SahilS1903/streamify"
              demoLink="https://streamify-kwwc.onrender.com"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
