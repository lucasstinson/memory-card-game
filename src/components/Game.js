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
  return (
    <div className="game-container">
      <div className="card-1">
        <img onClick={props.addScore} src={boruto}></img>
      </div>
      <div className="card-2">
        <img onClick={props.addScore} src={gara}></img>
      </div>
      <div className="card-3">
        <img onClick={props.addScore} src={goku}></img>
      </div>
      <div className="card-4">
        <img onClick={props.addScore} src={hinata}></img>
      </div>
      <div className="card-5">
        <img onClick={props.addScore} src={itachi}></img>
      </div>
      <div className="card-6">
        <img onClick={props.addScore} src={kakashi}></img>
      </div>
      <div className="card-7">
        <img onClick={props.addScore} src={naruto}></img>
      </div>
      <div className="card-8">
        <img onClick={props.addScore} src={obito}></img>
      </div>
      <div className="card-9">
        <img onClick={props.addScore} src={sailor}></img>
      </div>
      <div className="card-10">
        <img onClick={props.addScore} src={saitama}></img>
      </div>
      <div className="card-11">
        <img onClick={props.addScore} src={sakura}></img>
      </div>
      <div className="card-12">
        <img onClick={props.addScore} src={sarada}></img>
      </div>
      <div className="card-13">
        <img onClick={props.addScore} src={sasuke}></img>
      </div>
      <div className="card-14">
        <img onClick={props.addScore} src={tanjiro}></img>
      </div>
      <div className="card-15">
        <img onClick={props.addScore} src={tsunade}></img>
      </div>
    </div>
  );
};

export default Game;
