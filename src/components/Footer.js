import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo3.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/git1.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center mb-3">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center ">
            <div className="social-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ismar-fazli%C4%87-12a507222/"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a target="_blank" href="https://github.com/Ismar1997">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <a className="footer-btn" href="ismarcv.pdf" download>
              <button>Download CV</button>
            </a>
            <p>Copyright 2022. All Rights Reserved by Ismar.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
