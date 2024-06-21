import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <h5>Sinhala Sentiment Analysis App</h5>
            <p>
              This application performs sentiment analysis on Sinhala text using
              the ALBERT model. It's designed to help users understand the
              sentiment behind Sinhala language content, whether it's positive,
              negative, or neutral.
              The app leverages Natural Language Processing (NLP) techniques and
              the ALBERT model, fine-tuned specifically for the Sinhala
              language, ensuring high accuracy and efficiency.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Sinhala Sentiment Analysis App. All
              Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
