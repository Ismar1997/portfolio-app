import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
const ProjectCard = ({
  title,
  technologies,
  imgURL,
  description,
  projectgit,
  projectdemo,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function (event) {
    setWidth(window.innerWidth);
  });
  return (
    <Container>
      <Row>
        <Col lg={4} md={6} sm={12} xs={12}>
          <div className="proj-imgbx">
            <img src={imgURL} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{technologies}</span>
            </div>
          </div>
        </Col>
        <Col
          lg={4}
          md={6}
          sm={{ span: 6, offset: 0 }}
          xs={{ span: 6, offset: 3 }}
        >
          <Row>
            <div className={width < 1200 ? "proj-btn " : "proj-btn mt-4"}>
              <a href={projectgit} target="_blank">
                <button>CODE</button>
              </a>
            </div>
          </Row>
          <Row>
            <div className="proj-btn ">
              <a href={projectdemo} target="_blank">
                <button>DEMO</button>
              </a>
            </div>
          </Row>
        </Col>
        <Col lg={4} md sm={6} xs={12}>
          <span>
            <p>{description}</p>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectCard;
