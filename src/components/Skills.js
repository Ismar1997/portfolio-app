import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import techIcon1 from "../assets/img/html5logo.svg.svg";
import techIcon2 from "../assets/img/csslogo.svg.svg";
import techIcon3 from "../assets/img/jslogo.svg.svg";
import techIcon4 from "../assets/img/bootstraplogo.svg.svg";
import techIcon5 from "../assets/img/nodejslogo.svg.svg";
import techIcon6 from "../assets/img/reactlogo.svg.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                These are some technologies I'm familiar and used to working
                with.
              </p>
              <Carousel
                autoPlay={true}
                autoPlaySpeed={2500}
                removeArrowOnDeviceType={["mobile"]}
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={techIcon1} alt="Image" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={techIcon2} alt="Image" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={techIcon3} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={techIcon4} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={techIcon5} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={techIcon6} alt="Image" />
                  <h5>React JS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
