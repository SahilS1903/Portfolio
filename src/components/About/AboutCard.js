import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Sahil Shah</span> from{" "}
      <span className="purple">Mumbai, India.</span>
      <br />
      I am currently pursuing my <strong>B.Tech in Information Technology</strong> at{" "}
      <p>Vidyavardhini’s College of Engineering and Technology (VCET), Mumbai.</p>
      
      I have a passion for full-stack development and problem solving, and I actively take part in hackathons and coding challenges.
      <br />
      <br />
      Apart from coding, here are a few things I love doing:
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Playing Games
      </li>
      <li className="about-activity">
        <ImPointRight /> Writing Tech Blogs
      </li>
      <li className="about-activity">
        <ImPointRight /> Travelling
      </li>
    </ul>

    <p style={{ color: "rgb(155 126 172)" }}>
      "Strive to build things that make a difference!"
    </p>
    <footer className="blockquote-footer">Sahil</footer>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;
