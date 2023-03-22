import React, { useState } from "react";
import titleImage from "../images/title-image.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <img
          className="title-img"
          src={titleImage}
          alt="matching card game"
        ></img>
        <h1 className="title">Memory Game</h1>
      </div>
      <div className="intro-container">
        <div className="intro">
          <div className="welcome">Welcome to the Memory Card Game!</div>
          <div className="instructions-container">
            <div className="instruction-1">
              Test Your Memory by selecting all 15 Characters only once.
            </div>
            <div className="instruction-2">
              Gain a point for each unique character selected.
            </div>
            <div className="instruction-3">
              Clicking a non-unique character restarts the game.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
