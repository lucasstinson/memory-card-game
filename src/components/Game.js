import React, { useState } from "react";
import boruto from "../images/boruto.png";
import gara from "../images/gara.png";
import goku from "../images/goku.png";
import hinata from "../images/hinata.png";
import itachi from "../images/itachi.png";
import kakashi from "../images/kakashi.png";
import naruto from "../images/naruto.png";
import obito from "../images/obito.png";
import sailor from "../images/sailor.png";
import saitama from "../images/saitama.png";
import sakura from "../images/sakura.png";
import sarada from "../images/sarada.png";
import sasuke from "../images/sasuke.png";
import tanjiro from "../images/tanjiro.png";
import tsunade from "../images/tsunade.png";

const Game = (props) => {
  const [characters, setCharacters] = useState([
    { boruto: boruto },
    { gara: gara },
    { goku: goku },
    { hinata: hinata },
    { itachi: itachi },
    { kakashi: kakashi },
    { naruto: naruto },
    { obito: obito },
    { sailor: sailor },
    { saitama: saitama },
    { sakura: sakura },
    { sarada: sarada },
    { sasuke: sasuke },
    { tanjiro: tanjiro },
    { tsunade: tsunade },
  ]);

  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const checkselectedCharacter = (e) => {
    let clickedCharacter = e.target.className;
    let character = clickedCharacter;
    let allSelectedCharacters = [];
    if (selectedCharacters.includes(character)) {
      alert("You clicked the same character twice. Want to try again?");
      props.resetGame();
      resetSelectedCharacters();
    } else {
      allSelectedCharacters = [...selectedCharacters, character];
      setSelectedCharacters(allSelectedCharacters);
      props.addScore();
      if (props.score + 1 === 15) {
        resetSelectedCharacters();
      }
    }
  };

  const resetSelectedCharacters = () => {
    setSelectedCharacters([]);
  };
  const randomBoard = (characters) => {
    let currentIndex = characters.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [characters[currentIndex], characters[randomIndex]] = [
        characters[randomIndex],
        characters[currentIndex],
      ];
    }
    setCharacters(characters);
  };

  const handleClick = (e) => {
    randomBoard(characters);
    checkselectedCharacter(e);
  };

  let cards = [];

  for (let i = 0; i < 15; i++) {
    let randomCharacter = characters[i];
    for (let character in randomCharacter) {
      cards.push(
        <img
          className={character}
          onClick={handleClick}
          src={randomCharacter[character]}
          alt="anime character"
          key={i}
        ></img>
      );
    }
  }

  const renderGameBoard = (cards) => {
    return cards.map((card) => <div className="card">{card}</div>);
  };

  return <div className="game-container">{renderGameBoard(cards)}</div>;
};

export default Game;
