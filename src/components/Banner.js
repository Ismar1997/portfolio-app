import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/heroimg.svg";

const TEXTS = ["Frontend Developer", "Web Designer", "Tech Enthusiast"];
const Banner = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={8} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{"Hi it's Ismar ! I'm"}</h1>
            <h1 className="">
              <TextTransition
                className="dynamic-text"
                springConfig={presets.default}
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
            <p>
              I'am a graduate student on University of Sarajevo, who gravitates
              towards technology and nature. I like to spend my time exploring
              and learning new things and spending time with my close ones.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
