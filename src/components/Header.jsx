import React from "react";

const Header = ({score}) => {
  return (
    <header>
      {" "}
      <h1>
        {"rock".toUpperCase()} <span>{"paper".toUpperCase()}</span>
        <span>{"scissors".toUpperCase()}</span>
      </h1>
      <div className="score-card">
        <p>{"score".toUpperCase()}</p>
        <p className="score-card-score">{score}</p>
      </div>
    </header>
  );
};

export default Header;
