import React from "react";
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
        <div className="title">Memory Game</div>
      </div>
      <div className="intro-container">
        <div className="intro">
          <div className="welcome">Welcome to the Memory Card Game!</div>
          <div className="instructions-container">
            <div className="instruction-1">
              Select each character only once.
            </div>
            <div className="instruction-2">
              Clicking the same character restarts the game.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
