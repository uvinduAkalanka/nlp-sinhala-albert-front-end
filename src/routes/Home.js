import React, { useState } from "react";
import TextInput from "../components/TextInput";
import ResultDisplay from "../components/ResultDisplay";
import sinhalaPhoto from "../assets/sinhala.jpg";
import "./home.css";

const Home = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="home">
      <div className="home-image">
        <img
          src={sinhalaPhoto}
          alt="sinhala_image"
          className="home-image-image"
        />
      </div>
      <h1 className="home-title">Sentiment Analysis</h1>

      <TextInput setResult={setResult} />
      <div className="home-ResultDisplay">
        <ResultDisplay result={result} />
      </div>
    </div>
  );
};

export default Home;
