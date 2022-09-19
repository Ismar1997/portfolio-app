import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/pokescreen-modified.png";
import projImg2 from "../assets/img/vaultscreen-modified.png";
import projImg3 from "../assets/img/weather-modified.png";
import projImg4 from "../assets/img/portscreen-modified.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "Pokedecks",
      technologies: "HTML, CSS, JS, React, Material UI",
      description:
        "Pokedecks is designed Pokédex app for everyone to use. It contains detailed data on every single Pokémon.",
      imgURL: projImg1,
      projectgit: "https://github.com/Ismar1997/pokedecks-app",
      projectdemo: "https://ismar1997.github.io/pokedecks-app/",
    },
    {
      title: "Vaultify",
      technologies: "HTML, CSS, Javascript, React",
      description:
        "Vaultify is site that represents how one data-securing provider website should look like.",
      imgURL: projImg2,
      projectgit: "https://github.com/Ismar1997/vaultify-app",
      projectdemo: "https://ismar1997.github.io/vaultify-app/",
    },
    {
      title: "Weather Watch",
      technologies: "HTML, CSS, JS, React ",
      description:
        "Weather Watch is an app that helps you get information about current weather in different places around the world.",
      imgURL: projImg3,
      projectgit: "https://github.com/Ismar1997/weather-watch",
      projectdemo: "https://ismar1997.github.io/weather-watch/",
    },
    {
      title: "Portfolio",
      technologies: "HTML, CSS, JS, React ",
      description:
        "The portfolio website that display all of my projects and the skills I offer to my clients.",
      imgURL: projImg4,
      projectgit: "https://github.com/Ismar1997/portfolio-app",
      projectdemo: "https://playful-halva-0ca2b6.netlify.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              These are some of the projects I worked on. I hope you will find
              them interesting.
            </p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

export default Projects;
