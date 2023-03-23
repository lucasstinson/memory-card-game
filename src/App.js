import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const addScore = () => {
    setCurrentScore(currentScore + 1);
    updateHighScore(currentScore + 1);
  };

  const updateHighScore = (updatedCurrentScore) => {
    if (updatedCurrentScore > bestScore) {
      setBestScore(updatedCurrentScore);
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
  };

  useEffect(() => {
    if (currentScore >= 15) {
      alert("You Did it, want to play again?");
      resetGame();
    }
  }, [currentScore]);

  return (
    <div className="App">
      <Header />
      <Scoreboard score={currentScore} highScore={bestScore} />
      <Game addScore={addScore} resetGame={resetGame} score={currentScore} />
      <Footer />
    </div>
  );
};

export default App;

// Include a scoreboard that displays both Current / Best Score.
// current represents the score of the current game and Best represents
// the most correct in a row a user has reached

// Include a Card Section that displays images and perhaps text (names)
// in a row by column display ( 3 x 3, 4 x 4, 5 x 5)

// The card section should randomize the place of each card on each click

//  Style the game
// This can be cards from anime or video games
