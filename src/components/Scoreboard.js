import React from "react";

const Scoreboard = (props) => {
  return (
    <div className="score-board-container">
      <div className="score-board">
        <span className="score">Score: {props.score} </span>|
        <span className="high-score"> High Score: {props.highScore}</span> |
        <span className="max-score"> Max Score: 15</span>
      </div>
    </div>
  );
};

export default Scoreboard;
