import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import "./App.css";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <div className="App-container">
        <nav className="App-container-nav">
          <ul>
            <li>
              <Link className="App-container-nav-home" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="App-container-nav-about" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
