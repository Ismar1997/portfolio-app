import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../assets/img/logo3.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/git1.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className="scrolled" expanded={expanded} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo-img" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skills");
                setExpanded(false);
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skills");
                setExpanded(false);
              }}
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skills");
                setExpanded(false);
              }}
            >
              PROJECTS
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ismar-fazli%C4%87-12a507222/"
              >
                <img src={navIcon1} alt="Socials" />
              </a>
            </div>
            <div className="social-icon">
              <a target="_blank" href="https://github.com/Ismar1997">
                <img src={navIcon2} alt="Socials" />
              </a>
            </div>
          </span>
          <span className="navbar-text">
            <a target="_blank" href="ismarcv.pdf" download>
              <button>Download CV</button>
            </a>
          </span>
          <span className="navbar-text">
            <a href="#connect" onClick={() => setExpanded(false)}>
              <button>Let's Connect</button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
