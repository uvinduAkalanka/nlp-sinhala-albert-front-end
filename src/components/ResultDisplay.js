import React from "react";//, { useState, useEffect }
import happyFace from "../assets/happy.jpg";
import sadFace from "../assets/sad.jpg";
import neutralFace from "../assets/neutral.jpg";
import "./ResultDisplay.css";
// import { Card } from 'react-bootstrap';
import { Card, ListGroup } from "react-bootstrap";

const ResultDisplay = ({ result }) => {
  // const [badgeColor, setBadgeColor] = useState('');
  let badgeColor = "colour-default";

  if (!result) return null;

  if (result.error) {
    return <div>Error: {result.error}</div>;
  }


  switch (result[0].label) {
    case "POSITIVE":
      badgeColor = "colour-positive";
      break;
    case "NEUTRAL":
      badgeColor = "colour-neutral";

      break;
    case "NEGATIVE":
      badgeColor = "colour-negative";
      break;
    default:
      badgeColor = "colour-default";
      break;
  }

  return (
    <div className="ResultDisplay">
      <Card className="ResultDisplay-card">
        <Card.Header className="text-center">
          Sentiment Analysis Result
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Sentiment
            <span className={`badge badge-primary ${badgeColor}`}>{result[0].label}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Score
            <span className={`badge badge-success ${badgeColor}`}>
              {result[0].score.toFixed(4)}
            </span>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <div className="ResultDisplay-image">
        {result[0].label === "POSITIVE" ? (
          <img
            src={happyFace}
            alt="happyFace"
            className="ResultDisplay-image-face"
          />
        ) : result[0].label === "NEGATIVE" ? (
          <img
            src={sadFace}
            alt="sadFace"
            className="ResultDisplay-image-face"
          />
        ) : (
          <img
            src={neutralFace}
            alt="neutralFace"
            className="ResultDisplay-image-face"
          />
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;
