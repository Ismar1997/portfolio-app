import { Category } from "@mui/icons-material";
import React from "react";
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service123",
        "template_3eb926f",
        form.current,
        "whB9A8XnSi9r-3EZp"
      )
      .then(
        (result) => {
          e.target.reset();
          setButtonText("Send");
          alert("Message is successfully sent !");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again");
        }
      );
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    required
                    name="firstname"
                    type="text"
                    placeholder="First Name "
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input name="lastname" type="text" placeholder="Last Name " />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    name="mail"
                    type="email"
                    placeholder="Email Address"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="phonenumber"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </Col>
                <Col>
                  <textarea
                    required
                    name="message"
                    row="6"
                    placeholder="Message"
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
