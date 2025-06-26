import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, my name is{" "}
            <span className="purple">Muhammad Alfin Alfarizi</span>, and I’m
            from <span className="purple">Indonesia.</span>
            <br />I currently work as an{" "}
            <span className="purple">Academy Code Reviewer</span> at Dicoding
            Indonesia, where I help aspiring developers improve their coding
            skills.
            <br />
            I’m also a student at{" "}
            <span className="purple">Universitas Dinamika Bangsa</span>, and I’m
            currently in my 6th semester pursuing a degree in Computer Science.
            <br />
            <br />
            When I’m not coding, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Futsal with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching exciting football matches
            </li>
            <li className="about-activity">
              <ImPointRight /> Hitting the gym to stay fit
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the world of gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep growing, and create something impactful!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Alfin Alfarizi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
