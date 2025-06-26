import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="title">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love coding and exploring technology.
              <br />
              <br />I work with <b className="purple">JavaScript</b> and{" "}
              <b className="purple">Python</b> to build projects.
              <br />
              <br />
              My focus is on creating <b className="purple">
                Web Applications
              </b>{" "}
              using
              <b className="purple"> React.js</b>,{" "}
              <b className="purple">Next.js</b>, and building both Single-Page
              Applications (SPA) and Multi-Page Applications (MPA).
              <br />
              <br />I also develop mobile apps with{" "}
              <b className="purple">React Native</b> and{" "}
              <b className="purple">Expo</b>.
              <br />
              <br />
              For backend, I use <b className="purple">Node.js</b> with{" "}
              <b className="purple">Express</b> and{" "}
              <b className="purple">Hapi.js</b>, ensuring reliable and scalable
              server-side solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
                style={{ width: "300px", height: "300px" }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Reach out and <span className="purple">connect</span> with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Alfin123-stack"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammadalfinalfarizi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mhmdalfinalfrzii/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
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
