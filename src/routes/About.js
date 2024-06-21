import React from "react";
import { Container, Image, Card } from "react-bootstrap";
import "./About.css";
import developer from "../assets/me.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h2>Sinhala Sentiment Analysis App</h2>
        <p className="about-sub-title">
          This project uses a pre-trained model to analyze the sentiment of
          Sinhala text.
        </p>
      </div>

      <Container className="about-container text-center">
        <Card className="about-card">
          <Card.Body>
            <Image
              src={developer}
              alt="Your Name"
              className="about-image"
              roundedCircle
              fluid
            />
            <Card.Title className="about-title">Mr. Uvindu Akalanka</Card.Title>
            <Card.Text className="about-text">
              Software Engineer undergraduate.
            </Card.Text>
            <hr />
            <div className="about-details">
              <strong>Email:</strong> uvindu.surfing@gmail.com
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
export default About;
