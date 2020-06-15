import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Cover() {
  return (
    <div className="coverpageText text-left">
      <h1> Matt Dambra</h1>
      <br />
      <h3>Software Developer | Cybersecurity Jedi</h3>

      <Link to="/About" className="coverBtn">
        Learn More
      </Link>
    </div>
  );
}

export default Cover;
